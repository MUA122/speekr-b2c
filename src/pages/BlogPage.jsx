import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Check,
  ChevronDown,
  Flame,
  Library,
  Search,
  Sparkles,
  Tags,
  TrendingUp,
} from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const ALL_CATEGORIES = "All categories";
const DATE_FILTERS = [
  { label: "All dates", value: "all" },
  { label: "Newest first", value: "newest" },
  { label: "Oldest first", value: "oldest" },
];

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function BlogSeo() {
  useEffect(() => {
    document.title = "Speekr Blog | Communication, Sales & Leadership Guides";
    setMeta(
      "description",
      "Explore Speekr guides on executive presence, AI sales objection handling, leadership communication, presentations, and workplace soft skills.",
    );
    setMeta(
      "keywords",
      "Speekr blog, AI sales objection handling, executive presence, leadership communication, communication skills, AI communication coach",
    );

    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.dataset.seo = "blog-list";
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Speekr Blog",
      url: `${window.location.origin}/blog`,
      description:
        "Communication, sales, leadership, and AI coaching insights from Speekr.",
      publisher: {
        "@type": "Organization",
        name: "Speekr",
        url: window.location.origin,
      },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${window.location.origin}/blog/${post.slug}`,
        datePublished: post.isoDate,
        author: { "@type": "Organization", name: post.author },
      })),
    });
    document.head.appendChild(jsonLd);

    return () => {
      document.querySelector('script[data-seo="blog-list"]')?.remove();
    };
  }, []);

  return null;
}

function MetaPill({ children, icon: Icon }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        px: 1.35,
        py: 0.75,
        borderRadius: "999px",
        border: "1px solid rgba(0,66,37,0.12)",
        bgcolor: "rgba(255,255,255,0.48)",
        color: "rgba(0,66,37,0.72)",
        fontSize: 12.5,
        fontWeight: 850,
      }}
    >
      {Icon && <Icon size={14} aria-hidden />}
      {children}
    </Box>
  );
}

function ArticleCard({ post, index }) {
  return (
    <Box
      component="a"
      href={`/blog/${post.slug}`}
      className="premium-card"
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        minHeight: "100%",
        overflow: "hidden",
        borderRadius: "18px",
        border: "1px solid rgba(0,66,37,0.12)",
        bgcolor: "rgba(255,255,255,0.62)",
        color: "#102019",
        textDecoration: "none",
        boxShadow: "0 20px 70px rgba(0,66,37,0.08)",
        "&:hover": {
          borderColor: "rgba(255,118,0,0.34)",
          boxShadow: "0 28px 84px rgba(0,66,37,0.13)",
        },
        "&:hover .article-img": { transform: "scale(1.045)" },
        "&:hover .read-more": { color: "#FF7600" },
      }}
    >
      <Box sx={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
        <Box
          className="article-img"
          component="img"
          src={post.image}
          alt={post.imageAlt}
          loading={index > 0 ? "lazy" : undefined}
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
            left: 12,
            px: 1.2,
            py: 0.65,
            borderRadius: "999px",
            bgcolor: "rgba(247,249,232,0.92)",
            color: "#004225",
            fontSize: 11,
            fontWeight: 900,
          }}
        >
          {post.category}
        </Box>
      </Box>
      <Box sx={{ p: { xs: 2.3, md: 2.7 }, display: "flex", flexDirection: "column", gap: 1.6 }}>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Typography sx={{ fontSize: 12.5, fontWeight: 850, color: "rgba(0,66,37,0.56)" }}>
            {post.date}
          </Typography>
          <Typography sx={{ fontSize: 12.5, fontWeight: 850, color: "rgba(0,66,37,0.38)" }}>
            {post.readingTime}
          </Typography>
        </Box>
        <Typography
          component="h3"
          sx={{
            m: 0,
            fontSize: { xs: 23, md: 25 },
            fontWeight: 950,
            lineHeight: 1.08,
            letterSpacing: 0,
            color: "#004225",
          }}
        >
          {post.title}
        </Typography>
        <Typography sx={{ color: "rgba(16,32,25,0.66)", lineHeight: 1.68, fontSize: 14.5 }}>
          {post.excerpt}
        </Typography>
        <Box
          className="read-more"
          sx={{
            mt: "auto",
            pt: 0.5,
            display: "inline-flex",
            alignItems: "center",
            gap: 0.8,
            color: "#004225",
            fontSize: 13.5,
            fontWeight: 950,
            transition: "color 180ms ease",
          }}
        >
          Read article
          <ArrowRight size={16} aria-hidden />
        </Box>
      </Box>
    </Box>
  );
}

function FilterDropdown({ id, label, icon: Icon, value, options, onChange, openDropdown, setOpenDropdown }) {
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
          pl: 7.8,
          pr: 4.8,
          border: "1px solid rgba(0,66,37,0.12)",
          borderRadius: "16px",
          bgcolor: open ? "rgba(247,249,232,0.98)" : "rgba(255,255,255,0.72)",
          color: "#102019",
          fontFamily: "inherit",
          cursor: "pointer",
          textAlign: "left",
          boxShadow: open
            ? "0 16px 44px rgba(0,66,37,0.12), inset 0 1px 0 rgba(255,255,255,0.9)"
            : "inset 0 1px 0 rgba(255,255,255,0.86)",
          transition: "border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease",
          "&:hover": {
            borderColor: "rgba(255,118,0,0.32)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 42,
            height: 42,
            borderRadius: "14px",
            bgcolor: "rgba(0,66,37,0.08)",
            color: "#004225",
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
            letterSpacing: 1.25,
            textTransform: "uppercase",
            color: "rgba(0,66,37,0.42)",
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
            color: "#102019",
          }}
        >
          {selected.label}
        </Typography>
        <ChevronDown
          size={17}
          color="rgba(0,66,37,0.62)"
          aria-hidden
          style={{
            position: "absolute",
            right: 18,
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
            border: "1px solid rgba(0,66,37,0.12)",
            bgcolor: "#F7F9E8",
            boxShadow: "0 24px 70px rgba(0,66,37,0.18)",
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
                  bgcolor: active ? "rgba(255,118,0,0.12)" : "transparent",
                  color: active ? "#004225" : "rgba(0,66,37,0.76)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                  fontFamily: "inherit",
                  fontSize: 13.5,
                  fontWeight: active ? 950 : 850,
                  textAlign: "left",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: active ? "rgba(255,118,0,0.16)" : "rgba(0,66,37,0.06)",
                    color: "#004225",
                  },
                }}
              >
                <Box component="span" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {option.label}
                </Box>
                {active && <Check size={15} color="#FF7600" aria-hidden />}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}

function FilterPanel({
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
    selectedCategory !== ALL_CATEGORIES || dateFilter !== "newest" || query.trim();
  const categoryOptions = [ALL_CATEGORIES, ...categories].map((category) => ({
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
        border: "1px solid rgba(0,66,37,0.08)",
        bgcolor: "rgba(255,255,255,0.7)",
        boxShadow: "0 20px 70px rgba(0,66,37,0.08)",
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
            border: "1px solid rgba(0,66,37,0.12)",
            bgcolor: "rgba(255,255,255,0.72)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.86)",
          }}
        >
          <Search
            size={20}
            color="rgba(0,66,37,0.7)"
            aria-hidden
            style={{ position: "absolute", left: 22 }}
          />
          <Box
            component="input"
            value={query}
            onFocus={() => setOpenDropdown(null)}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by article, skill, or keyword"
            aria-label="Search blog articles"
            sx={{
              width: "100%",
              minWidth: 0,
              height: 70,
              pl: 6.4,
              pr: 2,
              border: "none",
              outline: "none",
              bgcolor: "transparent",
              color: "#102019",
              fontFamily: "inherit",
              fontSize: { xs: 14.5, md: 15.5 },
              fontWeight: 780,
              "&::placeholder": {
                color: "rgba(0,66,37,0.42)",
                opacity: 1,
              },
            }}
          />
        </Box>

        <FilterDropdown
          id="category"
          label="Category"
          icon={Tags}
          value={selectedCategory}
          options={categoryOptions}
          onChange={setSelectedCategory}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <FilterDropdown
          id="date"
          label="Date"
          icon={CalendarDays}
          value={dateFilter}
          options={DATE_FILTERS}
          onChange={setDateFilter}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
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
            bgcolor: hasFilters ? "rgba(255,118,0,0.14)" : "rgba(0,66,37,0.06)",
            color: hasFilters ? "#004225" : "rgba(0,66,37,0.4)",
            fontFamily: "inherit",
            fontSize: 13,
            fontWeight: 950,
            cursor: hasFilters ? "pointer" : "default",
            transition: "background-color 180ms ease, color 180ms ease, transform 180ms ease",
            "&:hover": hasFilters
              ? {
                  bgcolor: "#FF7600",
                  color: "#062D1B",
                  transform: "translateY(-1px)",
                }
              : {},
          }}
        >
          Clear filters
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 1.1,
          px: 0.4,
          fontSize: 12.5,
          fontWeight: 850,
          color: "rgba(0,66,37,0.56)",
        }}
      >
        Showing {resultCount} of {totalCount} articles
      </Typography>
    </Box>
  );
}

function RankedReadCard({ post, rank }) {
  return (
    <Box
      component="a"
      href={`/blog/${post.slug}`}
      className="premium-card"
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: { xs: "74px 1fr", sm: "92px 1fr auto" },
        alignItems: "center",
        gap: { xs: 1.5, md: 2 },
        p: { xs: 1.25, md: 1.5 },
        borderRadius: "18px",
        border: "1px solid rgba(247,249,232,0.12)",
        bgcolor: "#061f14",
        color: "#F7F9E8",
        textDecoration: "none",
        overflow: "hidden",
        boxShadow: "0 22px 76px rgba(0,66,37,0.18)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, rgba(255,118,0,0.12), transparent 34%, rgba(247,249,232,0.035))",
          pointerEvents: "none",
        },
        "&:hover": {
          borderColor: "rgba(255,118,0,0.34)",
          boxShadow: "0 28px 88px rgba(0,66,37,0.25)",
        },
        "&:hover .rank-arrow": {
          bgcolor: "#FF7600",
          color: "#062D1B",
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
          border: "1px solid rgba(247,249,232,0.1)",
        }}
      >
        <Box
          component="img"
          src={post.image}
          alt={post.imageAlt}
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
            bgcolor: "#FF7600",
            color: "#062D1B",
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
          <Typography sx={{ fontSize: 11.5, fontWeight: 950, color: "#FF7600" }}>
            {post.category}
          </Typography>
          <Typography sx={{ fontSize: 11.5, fontWeight: 850, color: "rgba(247,249,232,0.44)" }}>
            {post.readingTime}
          </Typography>
        </Box>
        <Typography
          component="h3"
          sx={{
            m: 0,
            fontSize: { xs: 18, md: 22 },
            fontWeight: 950,
            lineHeight: 1.1,
            color: "#F7F9E8",
          }}
        >
          {post.title}
        </Typography>
        <Typography
          sx={{
            mt: 0.8,
            display: { xs: "none", md: "block" },
            color: "rgba(247,249,232,0.58)",
            fontSize: 13.5,
            lineHeight: 1.55,
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
          border: "1px solid rgba(247,249,232,0.12)",
          bgcolor: "rgba(247,249,232,0.06)",
          color: "#F7F9E8",
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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [dateFilter, setDateFilter] = useState("newest");
  const [query, setQuery] = useState("");
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const mostReadPosts = [
    blogPosts.find((post) => post.slug === "ai-sales-objection-handling-guide"),
    blogPosts.find((post) => post.slug === "speekr-communication-skills-ai-riyadh-cairo"),
  ].filter(Boolean);
  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return blogPosts
      .filter((post) => {
        const matchesCategory =
          selectedCategory === ALL_CATEGORIES || post.category === selectedCategory;
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
  }, [dateFilter, query, selectedCategory]);

  const resetFilters = () => {
    setSelectedCategory(ALL_CATEGORIES);
    setDateFilter("newest");
    setQuery("");
  };

  return (
    <>
      <BlogSeo />
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "#F7F9E8",
          pt: { xs: 12.5, md: 15 },
          pb: { xs: 8, md: 11 },
        }}
      >
        <Box
          component="img"
          src="/images/brand-patterns/line-pattern-wide.png"
          alt=""
          aria-hidden
          sx={{
            position: "absolute",
            top: { xs: 92, md: 116 },
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
              gap: { xs: 3, lg: 5 },
              alignItems: "end",
              mb: { xs: 4.5, md: 6 },
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.55,
                  py: 0.75,
                  mb: 2.4,
                  borderRadius: "999px",
                  border: "1px solid rgba(0,66,37,0.13)",
                  bgcolor: "rgba(255,255,255,0.58)",
                  color: "#004225",
                  boxShadow: "0 14px 44px rgba(0,66,37,0.06)",
                }}
              >
                <BookOpenText size={14} aria-hidden />
                <Typography
                  component="span"
                  sx={{
                    fontSize: 11,
                    fontWeight: 950,
                    letterSpacing: 1.55,
                    textTransform: "uppercase",
                  }}
                >
                  Speekr Blog
                </Typography>
              </Box>
              <Typography
                component="h1"
                sx={{
                  m: 0,
                  maxWidth: 850,
                  fontSize: { xs: 46, sm: 62, md: 78 },
                  fontWeight: 950,
                  letterSpacing: 0,
                  lineHeight: 0.93,
                  color: "#004225",
                }}
              >
                Communication insights built for real conversations.
              </Typography>
              <Typography
                sx={{
                  mt: { xs: 2, md: 2.4 },
                  maxWidth: 690,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.72,
                  color: "rgba(0,66,37,0.62)",
                }}
              >
                Practical guides for leadership presence, sales conversations,
                AI coaching, and the moments where clarity changes the outcome.
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2.4,
                borderRadius: "20px",
                bgcolor: "#004225",
                color: "#F7F9E8",
                border: "1px solid rgba(247,249,232,0.12)",
                boxShadow: "0 24px 80px rgba(0,66,37,0.16)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Library size={17} color="#FF7600" aria-hidden />
                <Typography sx={{ fontSize: 12, fontWeight: 950, letterSpacing: 1.4, textTransform: "uppercase" }}>
                  Library
                </Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.3 }}>
                {[
                  ["Articles", blogPosts.length],
                  ["Categories", categories.length],
                  ["Focus", "AI"],
                  ["Level", "Practical"],
                ].map(([label, value]) => (
                  <Box
                    key={label}
                    sx={{
                      p: 1.4,
                      borderRadius: "14px",
                      bgcolor: "rgba(247,249,232,0.06)",
                      border: "1px solid rgba(247,249,232,0.09)",
                    }}
                  >
                    <Typography sx={{ fontSize: 11, color: "rgba(247,249,232,0.46)", fontWeight: 800 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ mt: 0.25, fontSize: 22, lineHeight: 1, fontWeight: 950, color: "#FF7600" }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              mb: { xs: 3, md: 4 },
            }}
          >
            <MetaPill icon={Sparkles}>All insights</MetaPill>
            {categories.map((category) => (
              <MetaPill key={category}>{category}</MetaPill>
            ))}
          </Box>

          <FilterPanel
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
            query={query}
            setQuery={setQuery}
            resultCount={filteredPosts.length}
            totalCount={blogPosts.length}
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
                <Flame size={18} color="#FF7600" aria-hidden />
                <Typography
                  component="p"
                  sx={{
                    m: 0,
                    fontSize: 11,
                    fontWeight: 950,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: "#FF7600",
                  }}
                >
                  Latest
                </Typography>
              </Box>
              <Typography
                component="h2"
                sx={{
                  m: 0,
                  fontSize: { xs: 30, md: 42 },
                  fontWeight: 950,
                  lineHeight: 1,
                  color: "#004225",
                }}
              >
                All Blog Articles
              </Typography>
            </Box>
            <Typography sx={{ maxWidth: 390, color: "rgba(0,66,37,0.58)", lineHeight: 1.6, fontSize: 14.5 }}>
              Every article is structured for readers, search engines, and AI answer
              engines with clean hierarchy and focused topic signals.
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
              <ArticleCard key={post.slug} post={post} index={index} />
            ))}
          </Box>

          {filteredPosts.length === 0 && (
            <Box
              sx={{
                mt: 2.5,
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                border: "1px solid rgba(0,66,37,0.12)",
                bgcolor: "rgba(255,255,255,0.56)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 24, md: 30 },
                  fontWeight: 950,
                  color: "#004225",
                  lineHeight: 1.08,
                }}
              >
                No articles match those filters.
              </Typography>
              <Typography sx={{ mt: 1, color: "rgba(0,66,37,0.58)", lineHeight: 1.6 }}>
                Try a broader keyword or reset the filters to view the full library.
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
              bgcolor: "rgba(0,66,37,0.06)",
              border: "1px solid rgba(0,66,37,0.12)",
              boxShadow: "0 22px 80px rgba(0,66,37,0.08)",
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
                  <TrendingUp size={18} color="#FF7600" aria-hidden />
                  <Typography
                    component="p"
                    sx={{
                      m: 0,
                      fontSize: 11,
                      fontWeight: 950,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      color: "#FF7600",
                    }}
                  >
                    Most Read
                  </Typography>
                </Box>
                <Typography
                  id="most-read-title"
                  component="h2"
                  sx={{
                    m: 0,
                    fontSize: { xs: 30, md: 42 },
                    fontWeight: 950,
                    lineHeight: 1,
                    color: "#004225",
                  }}
                >
                  Top Reads in the Last 7 Days
                </Typography>
              </Box>
              <Typography sx={{ maxWidth: 420, color: "rgba(0,66,37,0.58)", lineHeight: 1.6, fontSize: 14.5 }}>
                A ranked reading list for the guides getting the most attention
                right now. More posts can be added here as your library grows.
              </Typography>
            </Box>

            <Box sx={{ display: "grid", gap: 1.35 }}>
              {mostReadPosts.map((post, index) => (
                <RankedReadCard key={post.slug} post={post} rank={index + 1} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
