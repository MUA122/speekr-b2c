import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Flame,
  Library,
  Search,
  Tags,
  TrendingUp,
} from "lucide-react";
import { getBlogPosts } from "../data/blogPosts";
import { localizedPath } from "../utils/i18n";
import { applySeo, organizationSchema, setJsonLd } from "../utils/seo";

const UI = {
  en: {
    allCategories: "All categories",
    dateFilters: [
      { label: "All dates", value: "all" },
      { label: "Newest first", value: "newest" },
      { label: "Oldest first", value: "oldest" },
    ],
    title: "Communication insights built for real conversations.",
    subtitle:
      "Practical guides for leadership presence, sales conversations, AI coaching, and the moments where clarity changes the outcome.",
    badge: "Speekr Blog",
    library: "Library",
    stats: ["Articles", "Categories", "Focus", "Level"],
    statValues: ["AI", "Practical"],
    allInsights: "All insights",
    search: "Search by article, skill, or keyword",
    searchLabel: "Search blog articles",
    category: "Category",
    date: "Date",
    clear: "Clear filters",
    showing: (result, total) => `Showing ${result} of ${total} articles`,
    latest: "Latest",
    allArticles: "All Blog Articles",
    sectionNote:
      "Every article is structured for readers, search engines, and AI answer engines with clean hierarchy and focused topic signals.",
    readArticle: "Read article",
    noMatch: "No articles match those filters.",
    noMatchNote: "Try a broader keyword or reset the filters to view the full library.",
    mostRead: "Most Read",
    topReads: "Top Reads in the Last 7 Days",
    topReadsNote:
      "A ranked reading list for the guides getting the most attention right now. More posts can be added here as your library grows.",
    seoTitle: "Speekr Blog | Communication, Sales & Leadership Guides",
    seoDescription:
      "Explore Speekr guides on executive presence, AI sales objection handling, leadership communication, presentations, and workplace soft skills.",
    seoKeywords:
      "Speekr blog, AI sales objection handling, executive presence, leadership communication, communication skills, AI communication coach",
  },
  ar: {
    allCategories: "كل التصنيفات",
    dateFilters: [
      { label: "كل التواريخ", value: "all" },
      { label: "الأحدث أولا", value: "newest" },
      { label: "الأقدم أولا", value: "oldest" },
    ],
    title: "رؤى تواصل مصممة للمحادثات المهنية الحقيقية.",
    subtitle:
      "أدلة عملية حول الحضور القيادي، ومحادثات المبيعات، والتدريب بالذكاء الاصطناعي، واللحظات التي يغيّر فيها الوضوح النتيجة.",
    badge: "مدونة Speekr",
    library: "المكتبة",
    stats: ["المقالات", "التصنيفات", "التركيز", "المستوى"],
    statValues: ["الذكاء الاصطناعي", "عملي"],
    allInsights: "كل الرؤى",
    search: "ابحث باسم المقال أو المهارة أو الكلمة المفتاحية",
    searchLabel: "البحث في مقالات المدونة",
    category: "التصنيف",
    date: "التاريخ",
    clear: "مسح الفلاتر",
    showing: (result, total) => `عرض ${result} من أصل ${total} مقالات`,
    latest: "الأحدث",
    allArticles: "كل مقالات المدونة",
    sectionNote:
      "كل مقال منظم بعناية للقارئ ومحركات البحث ومحركات الإجابة الذكية، مع بنية واضحة وإشارات موضوعية دقيقة.",
    readArticle: "قراءة المقال",
    noMatch: "لا توجد مقالات تطابق هذه الفلاتر.",
    noMatchNote: "جرّب كلمة بحث أوسع أو امسح الفلاتر لعرض المكتبة كاملة.",
    mostRead: "الأكثر قراءة",
    topReads: "الأكثر قراءة خلال آخر 7 أيام",
    topReadsNote:
      "قائمة مختارة للأدلة التي تحظى بأكبر اهتمام حاليا، ويمكن توسيعها مع نمو مكتبة المحتوى.",
    seoTitle: "مدونة Speekr | أدلة التواصل والمبيعات والقيادة",
    seoDescription:
      "استكشف أدلة Speekr حول الحضور التنفيذي، والتعامل مع اعتراضات البيع، والتواصل القيادي، والعروض التقديمية، ومهارات العمل.",
    seoKeywords:
      "مدونة Speekr, مهارات التواصل, القيادة, المبيعات, التدريب بالذكاء الاصطناعي, العروض التقديمية",
  },
};

function BlogSeo({ locale, posts, ui }) {
  useEffect(() => {
    applySeo({
      title: ui.seoTitle,
      description: ui.seoDescription,
      keywords: ui.seoKeywords,
      path: "/blog",
      locale,
      type: "website",
      image: "/images/blog/speekr-communication-skills-ai-riyadh-cairo.png",
    });

    const removeBlog = setJsonLd("blog-list", {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: ui.badge,
      url: `${window.location.origin}${localizedPath("/blog", locale)}`,
      inLanguage: locale === "ar" ? "ar" : "en",
      description:
        "Communication, sales, leadership, and AI coaching insights from Speekr.",
      publisher: organizationSchema(),
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${window.location.origin}${localizedPath(`/blog/${post.slug}`, locale)}`,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        image: `${window.location.origin}${post.image}`,
        description: post.metaDescription,
        author: { "@type": "Organization", name: post.author },
      })),
    });

    const removeBreadcrumb = setJsonLd("blog-breadcrumb", {
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
          name: ui.badge,
          item: `${window.location.origin}${localizedPath("/blog", locale)}`,
        },
      ],
    });

    return () => {
      removeBlog();
      removeBreadcrumb();
    };
  }, [locale, posts, ui]);

  return null;
}

function ArticleCard({ post, index, locale, ui }) {
  const isAr = locale === "ar";

  return (
    <Box
      component="a"
      href={localizedPath(`/blog/${post.slug}`, locale)}
      className="premium-card"
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        minHeight: "100%",
        overflow: "hidden",
        borderRadius: "18px",
        border: "1px solid rgba(7,66,37,0.12)",
        bgcolor: "rgba(238,243,205,0.62)",
        color: "#073821",
        textDecoration: "none",
        direction: isAr ? "rtl" : "ltr",
        textAlign: isAr ? "right" : "left",
        boxShadow: "0 20px 70px rgba(7,66,37,0.08)",
        "&:hover": {
          borderColor: "rgba(242,100,51,0.34)",
          boxShadow: "0 28px 84px rgba(7,66,37,0.13)",
        },
        "&:hover .article-img": { transform: "scale(1.045)" },
        "&:hover .read-more": { color: "#F26433" },
      }}
    >
      <Box sx={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
        <Box
          className="article-img"
          component="img"
          src={post.image}
          alt={post.imageAlt}
          title={post.imageAlt}
          loading={index > 0 ? "lazy" : undefined}
          decoding="async"
          fetchPriority={index === 0 ? "high" : "auto"}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 620ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: isAr ? "auto" : 12,
            right: isAr ? 12 : "auto",
            px: 1.2,
            py: 0.65,
            borderRadius: "999px",
            bgcolor: "rgba(238,243,205,0.92)",
            color: "#074225",
            fontSize: 11,
            fontWeight: 900,
          }}
        >
          {post.category}
        </Box>
      </Box>
      <Box sx={{ p: { xs: 2.3, md: 2.7 }, display: "flex", flexDirection: "column", gap: 1.6 }}>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Typography sx={{ fontSize: 12.5, fontWeight: 850, color: "rgba(7,66,37,0.56)" }}>
            {post.date}
          </Typography>
          <Typography sx={{ fontSize: 12.5, fontWeight: 850, color: "rgba(7,66,37,0.38)" }}>
            {post.readingTime}
          </Typography>
        </Box>
        <Typography
          component="h3"
          sx={{
            m: 0,
            fontSize: isAr ? { xs: 25, md: 28 } : { xs: 23, md: 25 },
            fontFamily: (theme) => theme.palette.brand.fontHeadline,
            fontWeight: 950,
            lineHeight: isAr ? 1.22 : 1.08,
            letterSpacing: 0,
            color: "#074225",
          }}
        >
          {post.title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(7,56,33,0.66)",
            lineHeight: isAr ? 1.86 : 1.68,
            fontSize: isAr ? 15 : 14.5,
          }}
        >
          {post.excerpt}
        </Typography>
        <Box
          className="read-more"
          sx={{
            mt: "auto",
            pt: 0.5,
            display: "inline-flex",
            alignItems: "center",
            flexDirection: isAr ? "row-reverse" : "row",
            gap: 0.8,
            color: "#074225",
            fontSize: 13.5,
            fontWeight: 950,
            transition: "color 180ms ease",
          }}
        >
          {ui.readArticle}
          <ArrowRight size={16} aria-hidden />
        </Box>
      </Box>
    </Box>
  );
}

function FilterDropdown({ id, label, icon: Icon, value, options, onChange, openDropdown, setOpenDropdown, locale }) {
  const open = openDropdown === id;
  const selected = options.find((option) => option.value === value) || options[0];

  return (
    <Box sx={{ position: "relative", zIndex: open ? 40 : 1 }}>
      <Box
        component="button"
        type="button"
        onClick={() => setOpenDropdown(open ? null : id)}
        aria-expanded={open}
        aria-label={`${label} filter`}
        sx={{
          position: "relative",
          width: "100%",
          height: 70,
          pl: locale === "ar" ? 4.8 : 7.8,
          pr: locale === "ar" ? 7.8 : 4.8,
          border: "1px solid rgba(7,66,37,0.12)",
          borderRadius: "16px",
          bgcolor: open ? "rgba(238,243,205,0.98)" : "rgba(238,243,205,0.72)",
          color: "#073821",
          fontFamily: "inherit",
          cursor: "pointer",
          textAlign: locale === "ar" ? "right" : "left",
          boxShadow: open
            ? "0 16px 44px rgba(7,66,37,0.12), inset 0 1px 0 rgba(238,243,205,0.9)"
            : "inset 0 1px 0 rgba(238,243,205,0.86)",
          transition: "border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease",
          "&:hover": {
            borderColor: "rgba(242,100,51,0.32)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: locale === "ar" ? "auto" : 16,
            right: locale === "ar" ? 16 : "auto",
            top: "50%",
            transform: "translateY(-50%)",
            width: 42,
            height: 42,
            borderRadius: "14px",
            bgcolor: "rgba(7,66,37,0.08)",
            color: "#074225",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={17} aria-hidden />
        </Box>
        <Typography
          component="span"
          sx={{
            display: "block",
            mb: 0.35,
            fontSize: 9.5,
            fontWeight: 950,
            letterSpacing: locale === "ar" ? 0 : 1.25,
            textTransform: locale === "ar" ? "none" : "uppercase",
            color: "rgba(7,66,37,0.42)",
            textAlign: locale === "ar" ? "right" : "left",
          }}
        >
          {label}
        </Typography>
        <Typography
          component="span"
          sx={{
            display: "block",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: 14,
            fontWeight: 950,
            color: "#073821",
            textAlign: locale === "ar" ? "right" : "left",
          }}
        >
          {selected.label}
        </Typography>
        <ChevronDown
          size={17}
          color="rgba(7,66,37,0.62)"
          aria-hidden
          style={{
            position: "absolute",
            right: locale === "ar" ? "auto" : 18,
            left: locale === "ar" ? 18 : "auto",
            top: 27,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 180ms ease",
          }}
        />
      </Box>

      {open && (
        <Box
          sx={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            zIndex: 20,
            p: 0.65,
            borderRadius: "16px",
            border: "1px solid rgba(7,66,37,0.12)",
            bgcolor: "#EEF3CD",
            boxShadow: "0 24px 70px rgba(7,66,37,0.18)",
          }}
        >
          {options.map((option) => {
            const active = option.value === value;
            return (
              <Box
                key={option.value}
                component="button"
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpenDropdown(null);
                }}
                sx={{
                  width: "100%",
                  minHeight: 44,
                  px: 1.3,
                  border: "none",
                  borderRadius: "12px",
                  bgcolor: active ? "rgba(242,100,51,0.12)" : "transparent",
                  color: active ? "#074225" : "rgba(7,66,37,0.76)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                  fontFamily: "inherit",
                  fontSize: 13.5,
                  fontWeight: active ? 950 : 850,
                  textAlign: locale === "ar" ? "right" : "left",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: active ? "rgba(242,100,51,0.16)" : "rgba(7,66,37,0.06)",
                    color: "#074225",
                  },
                }}
              >
                <Box component="span" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {option.label}
                </Box>
                {active && <Check size={15} color="#F26433" aria-hidden />}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}

function FilterPanel({
  locale,
  ui,
  categories,
  selectedCategory,
  setSelectedCategory,
  dateFilter,
  setDateFilter,
  query,
  setQuery,
  resultCount,
  totalCount,
  onReset,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const hasFilters =
    selectedCategory !== ui.allCategories || dateFilter !== "newest" || query.trim();
  const categoryOptions = [ui.allCategories, ...categories].map((category) => ({
    label: category,
    value: category,
  }));

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: openDropdown ? 30 : 2,
        mb: {
          xs: openDropdown ? 22 : 3.2,
          md: openDropdown ? 23 : 4,
        },
        p: { xs: 1.4, md: 1.55 },
        borderRadius: { xs: "20px", md: "22px" },
        border: "1px solid rgba(7,66,37,0.08)",
        bgcolor: "rgba(238,243,205,0.7)",
        boxShadow: "0 20px 70px rgba(7,66,37,0.08)",
        backdropFilter: "blur(18px)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(260px, 1fr) minmax(210px, 0.54fr) minmax(180px, 0.42fr) 116px",
          },
          gap: { xs: 1.1, md: 1 },
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: 70,
            borderRadius: "16px",
            border: "1px solid rgba(7,66,37,0.12)",
            bgcolor: "rgba(238,243,205,0.72)",
            boxShadow: "inset 0 1px 0 rgba(238,243,205,0.86)",
          }}
        >
          <Search
            size={20}
            color="rgba(7,66,37,0.7)"
            aria-hidden
            style={{
              position: "absolute",
              left: locale === "ar" ? "auto" : 22,
              right: locale === "ar" ? 22 : "auto",
            }}
          />
          <Box
            component="input"
            value={query}
            onFocus={() => setOpenDropdown(null)}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={ui.search}
            aria-label={ui.searchLabel}
            sx={{
              width: "100%",
              minWidth: 0,
              height: 70,
              pl: locale === "ar" ? 2 : 6.4,
              pr: locale === "ar" ? 6.4 : 2,
              border: "none",
              outline: "none",
              bgcolor: "transparent",
              color: "#073821",
              fontFamily: "inherit",
              fontSize: { xs: 14.5, md: 15.5 },
              fontWeight: 780,
              textAlign: locale === "ar" ? "right" : "left",
              "&::placeholder": {
                color: "rgba(7,66,37,0.42)",
                opacity: 1,
              },
            }}
          />
        </Box>

        <FilterDropdown
          id="category"
          label={ui.category}
          icon={Tags}
          value={selectedCategory}
          options={categoryOptions}
          onChange={setSelectedCategory}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          locale={locale}
        />

        <FilterDropdown
          id="date"
          label={ui.date}
          icon={CalendarDays}
          value={dateFilter}
          options={ui.dateFilters}
          onChange={setDateFilter}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          locale={locale}
        />

        <Box
          component="button"
          type="button"
          onClick={() => {
            onReset();
            setOpenDropdown(null);
          }}
          disabled={!hasFilters}
          sx={{
            minHeight: 70,
            border: "none",
            borderRadius: "16px",
            bgcolor: hasFilters ? "rgba(242,100,51,0.14)" : "rgba(7,66,37,0.06)",
            color: hasFilters ? "#074225" : "rgba(7,66,37,0.4)",
            fontFamily: "inherit",
            fontSize: 13,
            fontWeight: 950,
            cursor: hasFilters ? "pointer" : "default",
            transition: "background-color 180ms ease, color 180ms ease, transform 180ms ease",
            "&:hover": hasFilters
              ? {
                  bgcolor: "#F26433",
                  color: "#074225",
                  transform: "translateY(-1px)",
                }
              : {},
          }}
        >
          {ui.clear}
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 1.1,
          px: 0.4,
          fontSize: 12.5,
          fontWeight: 850,
          color: "rgba(7,66,37,0.56)",
        }}
      >
        {ui.showing(resultCount, totalCount)}
      </Typography>
    </Box>
  );
}

function RankedReadCard({ post, rank, locale }) {
  const isAr = locale === "ar";

  return (
    <Box
      component="a"
      href={localizedPath(`/blog/${post.slug}`, locale)}
      className="premium-card"
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: { xs: "74px 1fr", sm: "92px 1fr auto" },
        alignItems: "center",
        gap: { xs: 1.5, md: 2 },
        p: { xs: 1.25, md: 1.5 },
        borderRadius: "18px",
        border: "1px solid rgba(7,66,37,0.28)",
        bgcolor: "rgba(238,243,205,0.54)",
        color: "#074225",
        textDecoration: "none",
        direction: isAr ? "rtl" : "ltr",
        textAlign: isAr ? "right" : "left",
        overflow: "hidden",
        backdropFilter: "blur(12px) saturate(1.04)",
        boxShadow: "0 18px 58px rgba(7,66,37,0.08)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, rgba(242,100,51,0.08), transparent 32%, rgba(7,66,37,0.045))",
          pointerEvents: "none",
        },
        "&:hover": {
          borderColor: "rgba(7,66,37,0.42)",
          bgcolor: "rgba(238,243,205,0.7)",
          boxShadow: "0 24px 74px rgba(7,66,37,0.12)",
        },
        "&:hover .rank-arrow": {
          bgcolor: "#F26433",
          color: "#ffffff",
          transform: "translateX(3px)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: { xs: 64, sm: 82 },
          height: { xs: 64, sm: 82 },
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(7,66,37,0.12)",
          boxShadow: "0 14px 34px rgba(7,66,37,0.1)",
        }}
      >
        <Box
          component="img"
          src={post.image}
          alt={post.imageAlt}
          title={post.imageAlt}
          loading="lazy"
          decoding="async"
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 6,
            left: 6,
            minWidth: 28,
            height: 24,
            px: 0.7,
            borderRadius: "999px",
            bgcolor: "#F26433",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 950,
          }}
        >
          #{rank}
        </Box>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, minWidth: 0 }}>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 0.8 }}>
          <Typography sx={{ fontSize: 11.5, fontWeight: 950, color: "#F26433" }}>
            {post.category}
          </Typography>
          <Typography sx={{ fontSize: 11.5, fontWeight: 850, color: "rgba(7,66,37,0.48)" }}>
            {post.readingTime}
          </Typography>
        </Box>
        <Typography
          component="h3"
          sx={{
            m: 0,
            fontSize: isAr ? { xs: 21, md: 25 } : { xs: 18, md: 22 },
            fontFamily: (theme) => theme.palette.brand.fontHeadline,
            fontWeight: 950,
            lineHeight: isAr ? 1.24 : 1.1,
            color: "#074225",
          }}
        >
          {post.title}
        </Typography>
        <Typography
          sx={{
            mt: 0.8,
            display: { xs: "none", md: "block" },
            color: "rgba(7,66,37,0.58)",
            fontSize: 13.5,
            lineHeight: isAr ? 1.85 : 1.55,
          }}
        >
          {post.excerpt}
        </Typography>
      </Box>

      <Box
        className="rank-arrow"
        sx={{
          position: "relative",
          zIndex: 1,
          display: { xs: "none", sm: "flex" },
          width: 42,
          height: 42,
          borderRadius: "50%",
          border: "1px solid rgba(7,66,37,0.12)",
          bgcolor: "rgba(7,66,37,0.055)",
          color: "#074225",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 220ms ease, background-color 220ms ease, color 220ms ease",
        }}
      >
        <ArrowRight size={17} aria-hidden />
      </Box>
    </Box>
  );
}

export default function BlogPage({ locale = "en" }) {
  const ui = UI[locale];
  const isAr = locale === "ar";
  const posts = getBlogPosts(locale);
  const [selectedCategory, setSelectedCategory] = useState(ui.allCategories);
  const [dateFilter, setDateFilter] = useState("newest");
  const [query, setQuery] = useState("");
  const categories = [...new Set(posts.map((post) => post.category))];
  const mostReadPosts = [
    posts.find((post) => post.slug === "ai-sales-objection-handling-guide"),
    posts.find((post) => post.slug === "speekr-communication-skills-ai-riyadh-cairo"),
  ].filter(Boolean);
  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts
      .filter((post) => {
        const matchesCategory =
          selectedCategory === ui.allCategories || post.category === selectedCategory;
        if (!matchesCategory) return false;

        if (!normalizedQuery) return true;

        const searchableText = [
          post.title,
          post.metaTitle,
          post.metaDescription,
          post.excerpt,
          post.category,
          post.author,
          post.date,
          ...post.tags,
          ...post.highlights,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (dateFilter === "oldest") {
          return new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime();
        }
        return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
      });
  }, [dateFilter, posts, query, selectedCategory, ui.allCategories]);

  const resetFilters = () => {
    setSelectedCategory(ui.allCategories);
    setDateFilter("newest");
    setQuery("");
  };

  return (
    <>
      <BlogSeo locale={locale} posts={posts} ui={ui} />
      <Box
        component="section"
        sx={{
          position: "relative",
          direction: isAr ? "rtl" : "ltr",
          overflow: "hidden",
          bgcolor: "#EEF3CD",
          pt: { xs: 14, sm: 16, md: 20 },
          pb: { xs: 5.5, sm: 6.5, md: 11 },
        }}
      >
        <Box
          component="img"
          src="/images/brand-patterns/line-pattern-wide.png"
          alt="Speekr blog background pattern"
          title="Speekr decorative blog background pattern"
          aria-hidden
          loading="lazy"
          decoding="async"
          sx={{
            position: "absolute",
            top: { xs: 116, md: 156 },
            left: "50%",
            width: "min(1120px, 95vw)",
            transform: "translateX(-50%)",
            opacity: 0.18,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "relative",
            maxWidth: 1210,
            mx: "auto",
            px: { xs: 2.5, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.95fr) 360px" },
              gap: { xs: 2.4, sm: 3, lg: 5 },
              alignItems: "end",
              mb: { xs: 3, sm: 4, md: 6 },
            }}
          >
            <Box>
              <Typography
                component="h1"
                sx={{
                  m: 0,
                  maxWidth: isAr ? 790 : 850,
                  fontSize: isAr ? { xs: 40, sm: 50, md: 68 } : { xs: 38, sm: 52, md: 78 },
                  fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  fontWeight: isAr ? 900 : 950,
                  letterSpacing: 0,
                  lineHeight: isAr ? { xs: 1.18, md: 1.12 } : { xs: 0.98, md: 0.93 },
                  color: "#074225",
                  textAlign: isAr ? "right" : "left",
                }}
              >
                {locale === "en" ? (
                  <>
                    Communication insights built for{" "}
                    <Box component="span" sx={{ color: "#F26433" }}>
                      real conversations.
                    </Box>
                  </>
                ) : (
                  <>
                    رؤى تواصل مصممة لـ
                    <Box component="span" sx={{ color: "#F26433" }}>
                      المحادثات المهنية الحقيقية.
                    </Box>
                  </>
                )}
              </Typography>
              <Typography
                sx={{
                  mt: { xs: 1.6, md: 2.4 },
                  maxWidth: isAr ? 760 : 690,
                  fontSize: isAr ? { xs: 15.5, md: 18 } : { xs: 15, md: 18 },
                  lineHeight: isAr ? { xs: 1.9, md: 1.95 } : { xs: 1.62, md: 1.72 },
                  color: "rgba(7,66,37,0.62)",
                  textAlign: isAr ? "right" : "left",
                }}
              >
                {ui.subtitle}
              </Typography>
            </Box>

            <Box
              sx={{
                p: { xs: 1.6, sm: 2, md: 2.4 },
                borderRadius: { xs: "18px", md: "20px" },
                bgcolor: "#074225",
                color: "#EEF3CD",
                border: "1px solid rgba(238,243,205,0.12)",
                boxShadow: "0 24px 80px rgba(7,66,37,0.16)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: { xs: 1.4, md: 2 } }}>
                <Library size={17} color="#F26433" aria-hidden />
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 950,
                    letterSpacing: isAr ? 0 : 1.4,
                    textTransform: isAr ? "none" : "uppercase",
                  }}
                >
                  {ui.library}
                </Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: { xs: 1, md: 1.3 } }}>
                {[
                  [ui.stats[0], posts.length],
                  [ui.stats[1], categories.length],
                  [ui.stats[2], ui.statValues[0]],
                  [ui.stats[3], ui.statValues[1]],
                ].map(([label, value]) => (
                  <Box
                    key={label}
                    sx={{
                      p: { xs: 1.15, md: 1.4 },
                      borderRadius: { xs: "12px", md: "14px" },
                      bgcolor: "rgba(238,243,205,0.06)",
                      border: "1px solid rgba(238,243,205,0.09)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 10, md: 11 },
                        color: "rgba(238,243,205,0.46)",
                        fontWeight: 800,
                        lineHeight: isAr ? 1.45 : 1.25,
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography sx={{ mt: 0.25, fontSize: { xs: 19, md: 22 }, lineHeight: 1, fontWeight: 950, color: "#F26433" }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <FilterPanel
            locale={locale}
            ui={ui}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
            query={query}
            setQuery={setQuery}
            resultCount={filteredPosts.length}
            totalCount={posts.length}
            onReset={resetFilters}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              mb: 2.5,
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                <Flame size={18} color="#F26433" aria-hidden />
                <Typography
                  component="p"
                  sx={{
                    m: 0,
                    fontSize: 11,
                    fontWeight: 950,
                    letterSpacing: isAr ? 0 : 1.5,
                    textTransform: isAr ? "none" : "uppercase",
                    color: "#F26433",
                  }}
                >
                  {ui.latest}
                </Typography>
              </Box>
              <Typography
                component="h2"
                sx={{
                  m: 0,
                  fontSize: isAr ? { xs: 33, md: 44 } : { xs: 30, md: 42 },
                  fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  fontWeight: 950,
                  lineHeight: isAr ? 1.2 : 1,
                  color: "#074225",
                  textAlign: isAr ? "right" : "left",
                }}
              >
                {ui.allArticles}
              </Typography>
            </Box>
            <Typography
              sx={{
                maxWidth: isAr ? 460 : 390,
                color: "rgba(7,66,37,0.58)",
                lineHeight: isAr ? 1.85 : 1.6,
                fontSize: isAr ? 15 : 14.5,
                textAlign: isAr ? "right" : "left",
              }}
            >
              {ui.sectionNote}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 2.2, md: 2.8 },
            }}
          >
            {filteredPosts.map((post, index) => (
              <ArticleCard key={post.slug} post={post} index={index} locale={locale} ui={ui} />
            ))}
          </Box>

          {filteredPosts.length === 0 && (
            <Box
              sx={{
                mt: 2.5,
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                border: "1px solid rgba(7,66,37,0.12)",
                bgcolor: "rgba(238,243,205,0.56)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: isAr ? { xs: 27, md: 32 } : { xs: 24, md: 30 },
                  fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  fontWeight: 950,
                  color: "#074225",
                  lineHeight: isAr ? 1.24 : 1.08,
                }}
              >
                {ui.noMatch}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  color: "rgba(7,66,37,0.58)",
                  lineHeight: isAr ? 1.85 : 1.6,
                  fontSize: isAr ? 15 : 14.5,
                }}
              >
                {ui.noMatchNote}
              </Typography>
            </Box>
          )}

          <Box
            component="section"
            aria-labelledby="most-read-title"
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 2.2, sm: 3, md: 3.5 },
              borderRadius: { xs: "22px", md: "28px" },
              bgcolor: "rgba(7,66,37,0.06)",
              border: "1px solid rgba(7,66,37,0.12)",
              boxShadow: "0 22px 80px rgba(7,66,37,0.08)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "space-between",
                gap: 2,
                flexDirection: { xs: "column", md: "row" },
                mb: 2.4,
              }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                  <TrendingUp size={18} color="#F26433" aria-hidden />
                  <Typography
                    component="p"
                    sx={{
                      m: 0,
                      fontSize: 11,
                      fontWeight: 950,
                      letterSpacing: isAr ? 0 : 1.5,
                      textTransform: isAr ? "none" : "uppercase",
                      color: "#F26433",
                    }}
                  >
                    {ui.mostRead}
                  </Typography>
                </Box>
                <Typography
                  id="most-read-title"
                  component="h2"
                  sx={{
                    m: 0,
                    fontSize: isAr ? { xs: 33, md: 44 } : { xs: 30, md: 42 },
                    fontFamily: (theme) => theme.palette.brand.fontHeadline,
                    fontWeight: 950,
                    lineHeight: isAr ? 1.2 : 1,
                    color: "#074225",
                    textAlign: isAr ? "right" : "left",
                  }}
                >
                  {ui.topReads}
                </Typography>
              </Box>
              <Typography
                sx={{
                  maxWidth: isAr ? 500 : 420,
                  color: "rgba(7,66,37,0.58)",
                  lineHeight: isAr ? 1.85 : 1.6,
                  fontSize: isAr ? 15 : 14.5,
                  textAlign: isAr ? "right" : "left",
                }}
              >
                {ui.topReadsNote}
              </Typography>
            </Box>

            <Box sx={{ display: "grid", gap: 1.35 }}>
              {mostReadPosts.map((post, index) => (
                <RankedReadCard key={post.slug} post={post} rank={index + 1} locale={locale} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
