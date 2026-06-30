import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Check, ArrowRight, Phone, Users, Building2 } from "lucide-react";
import { splitPrice } from "../utils/pricing";
import { commonCopy, pricingCopy } from "../utils/i18n";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

function LimeCheck() {
  return (
    <Box
      className="premium-card"
      sx={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        bgcolor: "rgba(242,100,51,0.1)",
        border: "1px solid rgba(242,100,51,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        mt: "1px",
      }}
    >
      <Check size={13} color="#F26433" strokeWidth={2.5} aria-hidden />
    </Box>
  );
}

function OrangeCheck() {
  return (
    <Box
      className="premium-card"
      sx={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        bgcolor: "rgba(242,100,51,0.1)",
        border: "1px solid rgba(242,100,51,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        mt: "1px",
      }}
    >
      <Check size={13} color="#F26433" strokeWidth={2.5} aria-hidden />
    </Box>
  );
}

function FeatureRow({ text, note, CheckIcon }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
      <CheckIcon />
      <Typography
        sx={{
          fontSize: { xs: 13.5, md: 14 },
          fontWeight: 600,
          color: "rgba(7,66,37,0.78)",
          lineHeight: 1.45,
        }}
      >
        {text}
        {note && (
          <Box
            component="span"
            sx={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(7,66,37,0.5)",
            }}
          >
            {" "}
            ({note})
          </Box>
        )}
      </Typography>
    </Box>
  );
}

function TeamsCard({ billing, prices, copy, common }) {
  const { prefix, amount } = splitPrice(
    billing === "monthly" ? prices.teamMonthly : prices.teamAnnual,
  );

  return (
    <Box
      sx={{
        position: "relative",
        flex: "1 1 0",
        display: "flex",
        flexDirection: "column",
        p: { xs: "24px 20px 22px", sm: "28px 24px 24px", md: "38px 36px 32px" },
        borderRadius: { xs: "20px", md: "24px" },
        border: "1px solid rgba(242,100,51,0.18)",
        bgcolor: "#EEF3CD",
        overflow: { xs: "visible", md: "hidden" },
        minHeight: { xs: "auto", md: 0 },
        boxShadow:
          "0 24px 70px rgba(242,100,51,0.16), 0 0 0 1px rgba(242,100,51,0.12)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow:
            "0 30px 82px rgba(242,100,51,0.2), 0 0 0 1px rgba(242,100,51,0.18)",
        },
      }}
    >
      {/* Lime ambient top glow */}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "140%",
          height: "70%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(242,100,51,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <Box
        sx={{
          position: { xs: "relative", sm: "absolute" },
          top: { xs: "auto", sm: 20 },
          right: { xs: "auto", sm: 20 },
          alignSelf: { xs: "flex-start", sm: "auto" },
          mb: { xs: 2, sm: 0 },
          px: 1.5,
          py: 0.55,
          borderRadius: "100px",
          bgcolor: "#F26433",
          display: "inline-flex",
          alignItems: "center",
          gap: 0.6,
        }}
      >
        <Users size={10} color="#074225" aria-hidden />
        <Typography
          sx={{
            fontSize: 10.5,
            fontWeight: 800,
            color: "#074225",
            letterSpacing: 0.4,
            lineHeight: 1,
          }}
        >
          {copy.teams}
        </Typography>
      </Box>

      {/* Plan name */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 19 },
            fontWeight: 800,
            letterSpacing: -0.3,
            color: "#F26433",
            mb: 0.6,
            lineHeight: 1.2,
            pr: { xs: 0, sm: 9 },
          }}
        >
          {copy.speekrTeams}
        </Typography>
        <Typography
          sx={{ fontSize: 12, fontWeight: 500, color: "rgba(7,66,37,0.46)" }}
        >
          {copy.teamAudience}
        </Typography>
      </Box>

      {/* Price */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0.4,
            lineHeight: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 800,
              color: "rgba(7,66,37,0.56)",
              lineHeight: 1,
              mt: "10px",
            }}
          >
            {prefix}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 64, md: 76 },
              fontFamily: (theme) => theme.palette.brand.fontHeadline,
              fontWeight: 900,
              letterSpacing: 0,
              lineHeight: 0.9,
              color: "#074225",
            }}
          >
            {amount}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: 12.5,
            fontWeight: 500,
            color: "rgba(7,66,37,0.42)",
            mt: 1,
          }}
        >
          {billing === "monthly" ? copy.perUserMonth : copy.perUserYear}
          {billing === "annual" && (
            <Box
              component="span"
              sx={{
                ml: 1.5,
                px: 1,
                py: "3px",
                borderRadius: "100px",
                bgcolor: "rgba(242,100,51,0.1)",
                border: "1px solid rgba(242,100,51,0.18)",
                fontSize: 10,
                fontWeight: 700,
                color: "#F26433",
                letterSpacing: 0.3,
              }}
            >
              {copy.save17}
            </Box>
          )}
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(242,100,51,0.12), rgba(242,100,51,0.04))",
          mb: { xs: 3, md: 3.5 },
        }}
      />

      {/* Features */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: 1,
          mb: { xs: 4, md: 4.5 },
        }}
      >
        {copy.teamFeatures.map(([text, note]) => (
          <FeatureRow
            key={text}
            text={text}
            note={note}
            CheckIcon={LimeCheck}
          />
        ))}
      </Box>

      {/* CTA */}
      <Box
        component="a"
        href="https://app.speekr.ai/auth/teams/signup/"
        target="_blank"
        rel="noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          px: 3,
          py: "14px",
          borderRadius: "100px",
          bgcolor: "#F26433",
          color: "#e1e5e3",
          fontSize: { xs: 14.5, md: 15 },
          fontWeight: 800,
          textDecoration: "none",
          boxShadow: "none",
          transition: "transform 0.22s ease, background-color 0.22s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            bgcolor: "#F26433",
            boxShadow: "none",
          },
        }}
      >
        {common.subscribe}
        <ArrowRight size={16} aria-hidden />
      </Box>
    </Box>
  );
}

function EnterpriseCard({ onDemoClick, copy, common }) {
  return (
    <Box
      sx={{
        position: "relative",
        flex: "1 1 0",
        display: "flex",
        flexDirection: "column",
        p: { xs: "24px 20px 22px", sm: "28px 24px 24px", md: "38px 36px 32px" },
        borderRadius: { xs: "20px", md: "24px" },
        border: "1px solid rgba(242,100,51,0.14)",
        bgcolor: "#EEF3CD",
        overflow: { xs: "visible", md: "hidden" },
        minHeight: { xs: "auto", md: 0 },
        boxShadow: "0 18px 50px rgba(7,66,37,0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow:
            "0 26px 70px rgba(7,66,37,0.12), 0 0 0 1px rgba(242,100,51,0.12)",
        },
      }}
    >
      {/* Orange ambient top glow */}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "140%",
          height: "60%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(242,100,51,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <Box
        sx={{
          position: { xs: "relative", sm: "absolute" },
          top: { xs: "auto", sm: 20 },
          right: { xs: "auto", sm: 20 },
          alignSelf: { xs: "flex-start", sm: "auto" },
          mb: { xs: 2, sm: 0 },
          px: 1.5,
          py: 0.55,
          borderRadius: "100px",
          bgcolor: "rgba(242,100,51,0.12)",
          border: "1px solid rgba(242,100,51,0.24)",
          display: "inline-flex",
          alignItems: "center",
          gap: 0.6,
        }}
      >
        <Building2 size={10} color="#F26433" aria-hidden />
        <Typography
          sx={{
            fontSize: 10.5,
            fontWeight: 800,
            color: "#F26433",
            letterSpacing: 0.4,
            lineHeight: 1,
          }}
        >
          {copy.enterprise}
        </Typography>
      </Box>

      {/* Plan name */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 19 },
            fontWeight: 800,
            letterSpacing: -0.3,
            color: "#F26433",
            mb: 0.6,
            lineHeight: 1.2,
            pr: { xs: 0, sm: 11 },
          }}
        >
          {copy.speekrEnterprise}
        </Typography>
        <Typography
          sx={{ fontSize: 12, fontWeight: 500, color: "rgba(7,66,37,0.46)" }}
        >
          {copy.enterpriseAudience}
        </Typography>
      </Box>

      {/* Price: Custom */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Typography
          sx={{
            fontSize: { xs: 64, md: 76 },
            fontFamily: (theme) => theme.palette.brand.fontHeadline,
            fontWeight: 900,
            letterSpacing: 0,
            lineHeight: 0.9,
            color: "#074225",
          }}
        >
          {copy.custom}
        </Typography>
        <Typography
          sx={{
            fontSize: 12.5,
            fontWeight: 500,
            color: "rgba(7,66,37,0.42)",
            mt: 1,
          }}
        >
          {copy.tailored}
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(242,100,51,0.1), rgba(242,100,51,0.03))",
          mb: { xs: 3, md: 3.5 },
        }}
      />

      {/* Features */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: 1,
          mb: { xs: 4, md: 4.5 },
        }}
      >
        {copy.enterpriseFeatures.map(([text, note]) => (
          <FeatureRow
            key={text}
            text={text}
            note={note}
            CheckIcon={OrangeCheck}
          />
        ))}
      </Box>

      {/* CTA */}
      <Box
        component="button"
        onClick={onDemoClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          px: 3,
          py: "14px",
          borderRadius: "100px",
          background: "rgba(242,100,51,0.1)",
          border: "1px solid rgba(242,100,51,0.24)",
          color: "#F26433",
          fontSize: { xs: 14.5, md: 15 },
          fontWeight: 800,
          cursor: "pointer",
          transition:
            "transform 0.22s ease, background 0.22s ease, box-shadow 0.22s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            background: "rgba(242,100,51,0.16)",
            boxShadow: "none",
          },
        }}
      >
        <Phone size={15} aria-hidden />
        {common.bookDemo}
      </Box>
    </Box>
  );
}

export default function TeamsPricingSection({
  locale = "en",
  prices,
  onDemoClick,
}) {
  const [billing, setBilling] = useState("monthly");
  const copy = pricingCopy[locale];
  const common = commonCopy[locale];

  return (
    <Box
      sx={{
        bgcolor: "#074225",
        px: 0,
        py: 0,
      }}
    >
      <Box
        component="section"
        aria-labelledby="teams-title"
        sx={{
          position: "relative",
          bgcolor: "#074225",
          borderRadius: 0,
          overflow: "hidden",
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(242,100,51,0.25) 50%, transparent)",
          },
        }}
      >
        {/* Ambient orb — orange top center */}
        <Box
          component="img"
          src="/images/brand-patterns/block.png"
          alt="Speekr teams pricing background pattern"
          title="Speekr decorative teams pricing background pattern"
          aria-hidden
          loading="lazy"
          decoding="async"
          sx={{
            position: "absolute",
            bottom: { xs: -130, md: -190 },
            right: { xs: -260, md: -220 },
            width: { xs: 760, md: 980 },
            maxWidth: "none",
            opacity: 0.11,
            pointerEvents: "none",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: "-12%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "80vw",
            maxWidth: 900,
            maxHeight: 900,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,100,51,0.07) 0%, transparent 60%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        {/* Ambient orb — lime bottom left */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: "-8%",
            left: "-4%",
            width: "50vw",
            height: "50vw",
            maxWidth: 580,
            maxHeight: 580,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,100,51,0.06) 0%, transparent 65%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
        {/* Noise grain */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.02,
            backgroundImage: NOISE,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        <Box
          sx={{ position: "relative", zIndex: 1, maxWidth: 960, mx: "auto" }}
        >
          {/* ── Heading ── */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              id="teams-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 34, sm: 46, md: 56, lg: 64 },
                fontFamily: (theme) => theme.palette.brand.fontHeadline,
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                lineHeight: 1.04,
                color: "#EEF3CD",
              }}
            >
              {copy.teamTitle}{" "}
              <Box component="span" sx={{ color: "#F26433" }}>
                {copy.teamAccent}
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2.5, md: 3 },
                fontSize: { xs: 15, md: 16.5 },
                lineHeight: 1.72,
                color: "rgba(238,243,205,0.68)",
                maxWidth: 500,
                mx: "auto",
              }}
            >
              {copy.teamSubtitle}
            </Typography>
          </Box>

          {/* ── Billing toggle ── */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 6, md: 8 },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                borderRadius: "100px",
                border: "1px solid rgba(238,243,205,0.14)",
                bgcolor: "rgba(238,243,205,0.08)",
                p: "4px",
                gap: "4px",
              }}
            >
              {["monthly", "annual"].map((b) => (
                <Box
                  key={b}
                  component="button"
                  onClick={() => setBilling(b)}
                  sx={{
                    px: { xs: 2.5, md: 3.5 },
                    py: "10px",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: { xs: 13.5, md: 14 },
                    fontWeight: 700,
                    transition:
                      "background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease",
                    bgcolor: billing === b ? "#F26433" : "transparent",
                    color: billing === b ? "#074225" : "rgba(238,243,205,0.72)",
                    boxShadow: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {b === "monthly" ? copy.monthly : copy.annual}
                  {b === "annual" && (
                    <Box
                      sx={{
                        px: 1,
                        py: "3px",
                        borderRadius: "100px",
                        bgcolor:
                          billing === "annual"
                            ? "rgba(7,66,37,0.28)"
                            : "rgba(242,100,51,0.12)",
                        border:
                          billing === "annual"
                            ? "none"
                            : "1px solid rgba(242,100,51,0.2)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: 0.3,
                          color:
                            billing === "annual"
                              ? "rgba(7,66,37,0.8)"
                              : "#F26433",
                          lineHeight: 1,
                        }}
                      >
                        {copy.save17}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Cards ── */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2.5, md: 3 },
              alignItems: "stretch",
            }}
          >
            <TeamsCard
              billing={billing}
              prices={prices}
              copy={copy}
              common={common}
            />
            <EnterpriseCard
              onDemoClick={onDemoClick}
              copy={copy}
              common={common}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
