import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  FileText,
  Quote,
  Sparkles,
} from "lucide-react";
import { getBlogPostBySlug, getBlogPosts } from "../data/blogPosts";
import { localizedPath } from "../utils/i18n";
import { applySeo, organizationSchema, setJsonLd } from "../utils/seo";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const UI = {
  en: {
    notFound: "Article not found.",
    notFoundText: "The article may have moved, or the link may be incomplete.",
    back: "Back to Blog",
    inGuide: "In this guide",
    practice: "Practice with Speekr",
    start: "Start Free Trial",
    takeaways: "Key takeaways",
    keepReading: "Keep Reading",
  },
  ar: {
    notFound: "المقال غير موجود.",
    notFoundText: "ربما تم نقل المقال أو أن الرابط غير مكتمل.",
    back: "العودة إلى المدونة",
    inGuide: "في هذا الدليل",
    practice: "تدرّب مع Speekr",
    start: "ابدأ التجربة المجانية",
    takeaways: "أهم الخلاصات",
    keepReading: "تابع القراءة",
  },
};

function ArticleSeo({ post, locale }) {
  useEffect(() => {
    if (!post) return undefined;

    applySeo({
      title: post.metaTitle,
      description: post.metaDescription,
      keywords: post.tags.join(", "),
      path: `/blog/${post.slug}`,
      locale,
      type: "article",
      image: post.image,
    });

    const postUrl = `${window.location.origin}${localizedPath(`/blog/${post.slug}`, locale)}`;
    const removePost = setJsonLd("blog-post", {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: `${window.location.origin}${post.image}`,
      datePublished: post.isoDate,
      dateModified: post.isoDate,
      inLanguage: locale === "ar" ? "ar" : "en",
      author: {
        "@type": "Organization",
        name: post.author,
        url: window.location.origin,
      },
      publisher: organizationSchema(),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": postUrl,
      },
      articleSection: post.category,
      keywords: post.tags.join(", "),
    });

    const removeBreadcrumb = setJsonLd("article-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "ar" ? "الرئيسية" : "Home",
          item: `${window.location.origin}${localizedPath("/", locale)}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: locale === "ar" ? "المدونة" : "Blog",
          item: `${window.location.origin}${localizedPath("/blog", locale)}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: postUrl,
        },
      ],
    });

    return () => {
      removePost();
      removeBreadcrumb();
    };
  }, [locale, post]);

  return null;
}

function ArticleNotFound({ locale, ui }) {
  return (
    <Box
      sx={{
        minHeight: "100svh",
        bgcolor: "#EEF3CD",
        pt: { xs: 15, md: 18 },
        pb: 10,
        px: { xs: 2.5, md: 5 },
      }}
    >
      <Box sx={{ maxWidth: 760, mx: "auto", textAlign: "center" }}>
        <Typography
          component="h1"
          sx={{
            m: 0,
            fontSize: { xs: 42, md: 64 },
            fontFamily: (theme) => theme.palette.brand.fontHeadline,
            fontWeight: 950,
            lineHeight: 0.95,
            color: "#074225",
          }}
        >
          {ui.notFound}
        </Typography>
        <Typography sx={{ mt: 2, color: "rgba(7,66,37,0.62)", lineHeight: 1.7 }}>
          {ui.notFoundText}
        </Typography>
        <Box
          component="a"
          href={localizedPath("/blog", locale)}
          sx={{
            mt: 4,
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 3,
            py: 1.45,
            borderRadius: "999px",
            bgcolor: "#F26433",
            color: "#074225",
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          {ui.back}
          <ArrowRight size={16} aria-hidden />
        </Box>
      </Box>
    </Box>
  );
}

function MetaChip({ icon: Icon, children }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        px: 1.45,
        py: 0.8,
        borderRadius: "999px",
        border: "1px solid rgba(7,66,37,0.12)",
        bgcolor: "rgba(238,243,205,0.52)",
        color: "rgba(7,66,37,0.72)",
        fontSize: 12.5,
        fontWeight: 850,
      }}
    >
      {Icon && <Icon size={14} aria-hidden />}
      {children}
    </Box>
  );
}

function SectionBlock({ section, index }) {
  return (
    <Box
      component="section"
      id={section.heading ? slugify(section.heading) : undefined}
      sx={{
        scrollMarginTop: 120,
        pt: index === 0 ? 0 : { xs: 4.2, md: 5.6 },
        mt: index === 0 ? 0 : { xs: 4.2, md: 5.6 },
        borderTop: index === 0 ? "none" : "1px solid rgba(7,66,37,0.1)",
      }}
    >
      {section.heading && (
        <Typography
          component="h2"
          sx={{
            m: 0,
            mb: 1.8,
            fontSize: { xs: 29, md: 40 },
            fontWeight: 950,
            lineHeight: 1.05,
            letterSpacing: 0,
            color: "#074225",
          }}
        >
          {section.heading}
        </Typography>
      )}

      {section.body?.map((paragraph) => (
        <Typography
          key={paragraph}
          sx={{
            my: 0,
            mb: 2.15,
            fontSize: { xs: 16.5, md: 18.5 },
            lineHeight: 1.86,
            color: "rgba(7,56,33,0.76)",
          }}
        >
          {paragraph}
        </Typography>
      ))}

      {section.listIntro && (
        <Typography
          sx={{
            mt: 3,
            mb: 1.45,
            fontSize: { xs: 17, md: 18 },
            fontWeight: 950,
            color: "#074225",
          }}
        >
          {section.listIntro}
        </Typography>
      )}

      {section.list && (
        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "grid", gap: 1 }}>
          {section.list.map((item) => (
            <Box
              key={item}
              component="li"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.25,
                p: { xs: 1.35, md: 1.5 },
                borderRadius: "14px",
                border: "1px solid rgba(7,66,37,0.1)",
                bgcolor: "rgba(238,243,205,0.56)",
              }}
            >
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  mt: 0.2,
                  borderRadius: "50%",
                  bgcolor: "rgba(242,100,51,0.12)",
                  color: "#F26433",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Check size={13} aria-hidden />
              </Box>
              <Typography sx={{ fontSize: { xs: 15.5, md: 16.2 }, lineHeight: 1.6, color: "#073821" }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {section.callouts && (
        <Box sx={{ display: "grid", gap: 1.35, mt: 3 }}>
          {section.callouts.map((item) => (
            <Box
              key={item.title}
              sx={{
                p: { xs: 2.1, md: 2.5 },
                borderRadius: "17px",
                border: "1px solid rgba(7,66,37,0.12)",
                bgcolor: "rgba(238,243,205,0.6)",
                boxShadow: "0 16px 50px rgba(7,66,37,0.06)",
              }}
            >
              <Typography
                component="h3"
                sx={{
                  m: 0,
                  mb: 0.7,
                  fontSize: { xs: 19, md: 23 },
                  fontWeight: 950,
                  color: "#074225",
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "rgba(7,56,33,0.7)", lineHeight: 1.72 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

function RelatedCard({ post, locale }) {
  return (
    <Box
      component="a"
      href={localizedPath(`/blog/${post.slug}`, locale)}
      className="premium-card"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "96px 1fr", sm: "140px 1fr" },
        gap: 1.6,
        p: 1,
        borderRadius: "18px",
        border: "1px solid rgba(7,66,37,0.12)",
        bgcolor: "rgba(238,243,205,0.56)",
        textDecoration: "none",
        color: "#074225",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={post.image}
        alt={post.imageAlt}
        title={post.imageAlt}
        loading="lazy"
        decoding="async"
        sx={{
          width: "100%",
          aspectRatio: "4 / 3",
          objectFit: "cover",
          borderRadius: "14px",
        }}
      />
      <Box sx={{ minWidth: 0, pr: 1 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 950, color: "#F26433", mb: 0.5 }}>
          {post.category}
        </Typography>
        <Typography sx={{ fontSize: { xs: 16, sm: 20 }, fontWeight: 950, lineHeight: 1.12 }}>
          {post.title}
        </Typography>
      </Box>
    </Box>
  );
}

export default function BlogPostPage({ slug, locale = "en" }) {
  const ui = UI[locale];
  const posts = getBlogPosts(locale);
  const post = getBlogPostBySlug(slug, locale);

  if (!post) return <ArticleNotFound locale={locale} ui={ui} />;

  const headings = post.sections.filter((section) => section.heading);
  const related = posts.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <ArticleSeo post={post} locale={locale} />
      <Box
        component="article"
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "#EEF3CD",
          color: "#073821",
          pt: { xs: 12.5, md: 14.5 },
          pb: { xs: 8, md: 11 },
        }}
      >
        <Box
          component="img"
          src="/images/brand-patterns/line-pattern-wide.png"
          alt="Speekr article background pattern"
          title="Speekr decorative article background pattern"
          aria-hidden
          loading="lazy"
          decoding="async"
          sx={{
            position: "absolute",
            top: 120,
            left: "50%",
            width: "min(1180px, 96vw)",
            transform: "translateX(-50%)",
            opacity: 0.16,
            pointerEvents: "none",
          }}
        />

        <Box sx={{ position: "relative", maxWidth: 1210, mx: "auto", px: { xs: 2.5, md: 5 } }}>
          <Box
            component="a"
            href={localizedPath("/blog", locale)}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: { xs: 3, md: 4 },
              color: "rgba(7,66,37,0.66)",
              fontSize: 14,
              fontWeight: 900,
              textDecoration: "none",
              transition: "color 180ms ease, transform 180ms ease",
              "&:hover": { color: "#F26433", transform: "translateX(-2px)" },
            }}
          >
            <ArrowLeft size={16} aria-hidden />
            {ui.back}
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.95fr) minmax(420px, 0.85fr)" },
              gap: { xs: 3.5, lg: 5 },
              alignItems: "center",
              mb: { xs: 5, md: 7 },
            }}
          >
            <Box>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2.3 }}>
                <MetaChip icon={Sparkles}>{post.category}</MetaChip>
                <MetaChip icon={CalendarDays}>{post.date}</MetaChip>
                <MetaChip icon={Clock3}>{post.readingTime}</MetaChip>
              </Box>
              <Typography
                component="h1"
                sx={{
                  m: 0,
                  maxWidth: 850,
                  fontSize: { xs: 40, sm: 56, md: 70 },
                  fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  fontWeight: 950,
                  letterSpacing: 0,
                  lineHeight: 0.94,
                  color: "#074225",
                }}
              >
                {post.title}
              </Typography>
              <Typography
                sx={{
                  mt: { xs: 2.2, md: 2.8 },
                  maxWidth: 760,
                  fontSize: { xs: 16.5, md: 19 },
                  lineHeight: 1.72,
                  color: "rgba(7,66,37,0.64)",
                }}
              >
                {post.metaDescription}
              </Typography>
            </Box>

            <Box
              sx={{
                position: "relative",
                borderRadius: { xs: "22px", md: "28px" },
                overflow: "hidden",
                border: "1px solid rgba(7,66,37,0.12)",
                boxShadow: "0 30px 95px rgba(7,66,37,0.18)",
                aspectRatio: "16 / 10",
                bgcolor: "#074225",
              }}
            >
              <Box
                component="img"
                src={post.image}
                alt={post.imageAlt}
                title={post.imageAlt}
                decoding="async"
                fetchPriority="high"
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "260px minmax(0, 760px) 260px" },
              gap: { xs: 4, lg: 4.5 },
              alignItems: "start",
            }}
          >
            <Box sx={{ position: { lg: "sticky" }, top: { lg: 110 }, display: "grid", gap: 1.5 }}>
              <Box
                sx={{
                  p: 2.2,
                  borderRadius: "18px",
                  border: "1px solid rgba(7,66,37,0.12)",
                  bgcolor: "rgba(238,243,205,0.54)",
                  boxShadow: "0 16px 52px rgba(7,66,37,0.06)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.85, mb: 1.4 }}>
                  <FileText size={15} color="#F26433" aria-hidden />
                  <Typography sx={{ fontSize: 11, fontWeight: 950, letterSpacing: 1.35, textTransform: "uppercase", color: "#F26433" }}>
                    {ui.inGuide}
                  </Typography>
                </Box>
                <Box component="nav" aria-label="Article sections" sx={{ display: "grid", gap: 0.85 }}>
                  {headings.slice(0, 7).map((section) => (
                    <Box
                      key={section.heading}
                      component="a"
                      href={`#${slugify(section.heading)}`}
                      sx={{
                        color: "rgba(7,66,37,0.72)",
                        textDecoration: "none",
                        fontSize: 13.5,
                        fontWeight: 850,
                        lineHeight: 1.35,
                        "&:hover": { color: "#F26433" },
                      }}
                    >
                      {section.heading}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {post.tags.map((tag) => (
                  <Box
                    key={tag}
                    component="span"
                    sx={{
                      px: 1.1,
                      py: 0.65,
                      borderRadius: "999px",
                      bgcolor: "rgba(7,66,37,0.08)",
                      color: "rgba(7,66,37,0.72)",
                      fontSize: 12,
                      fontWeight: 850,
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Box
                sx={{
                  mb: { xs: 4, md: 5 },
                  p: { xs: 2.5, md: 3.2 },
                  borderRadius: "20px",
                  bgcolor: "#074225",
                  color: "#EEF3CD",
                  boxShadow: "0 24px 80px rgba(7,66,37,0.18)",
                }}
              >
                <Quote size={27} color="#F26433" aria-hidden />
                <Typography
                  sx={{
                    mt: 1.3,
                    fontSize: { xs: 21, md: 27 },
                    lineHeight: 1.35,
                    fontWeight: 950,
                    letterSpacing: 0,
                  }}
                >
                  {post.quote}
                </Typography>
              </Box>

              {post.sections.map((section, index) => (
                <SectionBlock
                  key={section.heading || `intro-${index}`}
                  section={section}
                  index={index}
                />
              ))}
            </Box>

            <Box sx={{ position: { lg: "sticky" }, top: { lg: 110 }, display: "grid", gap: 1.5 }}>
              <Box
                sx={{
                  p: 2.2,
                  borderRadius: "18px",
                  bgcolor: "#074225",
                  color: "#EEF3CD",
                  border: "1px solid rgba(238,243,205,0.12)",
                  boxShadow: "0 20px 70px rgba(7,66,37,0.16)",
                }}
              >
                <Typography sx={{ fontSize: 12, fontWeight: 950, color: "#F26433", mb: 1 }}>
                  {ui.practice}
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 950, lineHeight: 1.12 }}>
                  {post.ctaTitle}
                </Typography>
                <Box
                  component="a"
                  href="https://app.speekr.ai/auth/sign-up/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    mt: 2.3,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#F26433",
                    fontSize: 14,
                    fontWeight: 950,
                    textDecoration: "none",
                  }}
                >
                  {ui.start}
                  <ArrowRight size={15} aria-hidden />
                </Box>
              </Box>
              <Box
                sx={{
                  p: 2.2,
                  borderRadius: "18px",
                  border: "1px solid rgba(7,66,37,0.12)",
                  bgcolor: "rgba(238,243,205,0.54)",
                }}
              >
                <Typography sx={{ fontSize: 11, fontWeight: 950, letterSpacing: 1.35, textTransform: "uppercase", color: "#F26433", mb: 1.4 }}>
                  {ui.takeaways}
                </Typography>
                <Box sx={{ display: "grid", gap: 1.15 }}>
                  {post.highlights.map((highlight) => (
                    <Typography
                      key={highlight}
                      sx={{ fontSize: 13.5, fontWeight: 850, lineHeight: 1.5, color: "rgba(7,66,37,0.75)" }}
                    >
                      {highlight}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          {related.length > 0 && (
            <Box
              sx={{
                mt: { xs: 7, md: 9 },
                pt: { xs: 4.5, md: 6 },
                borderTop: "1px solid rgba(7,66,37,0.12)",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  m: 0,
                  mb: 2.3,
                  fontSize: { xs: 30, md: 42 },
                  fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  fontWeight: 950,
                  color: "#074225",
                }}
              >
                {ui.keepReading}
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                  gap: 2,
                }}
              >
                {related.map((item) => (
                  <RelatedCard key={item.slug} post={item} locale={locale} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
