import { CardActions, Grid, Skeleton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import Link from "next/link";

export default function LoadingHelps() {
  const numberOfElements = 9;

  return (
    <Grid
      container
      style={{
        justifyContent: "center",
      }}
    >
      {Array.from({ length: numberOfElements }, (_, index) => (
        <Card
          key={index}
          sx={{
            minWidth: 260,
            minHeight: 230,
            margin: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                style={{
                  marginRight: "auto",
                }}
              >
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </Typography>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={5}
                style={{
                  padding: 5,
                  flex: 1,
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                <Image
                  src="/position.svg"
                  alt="position"
                  width={20}
                  height={20}
                  priority
                />
                <Typography
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                  }}
                  variant="h6"
                >
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </Typography>
                <Typography
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                  }}
                  variant="body1"
                >
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  padding: 5,
                  borderRight: "0.5px solid #ACACAC",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <span
                    style={{
                      marginRight: 3,
                      marginLeft: 3,
                    }}
                  >
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </span>
                  <Typography
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                    }}
                    variant="h5"
                  >
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions
            style={{
              backgroundColor: "#5B5B5B0D",
              marginTop: "auto",
              padding: "15px 25px",
            }}
          >
            <Skeleton variant="circular" width={40} height={40} />
            <Link
              href={`/helps/`}
              style={{
                marginRight: "auto",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </Link>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
}
