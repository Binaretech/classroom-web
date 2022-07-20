import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PasswordField from "../../components/PasswordField";

export default function LoginView() {
  const { t } = useTranslation(["login", "attributes"]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="grey.200"
    >
      <Grid item container justifyContent="center">
        <Grid item lg={5} xl={4} md={6} sm={8}>
          <Paper elevation={5}>
            <Grid container direction="column" justifyContent="space-between">
              <Grid item p="2em">
                <Grid item p="2em">
                  <Typography variant="h4" align="center">
                    {t("title", { ns: "login" })}
                  </Typography>
                </Grid>

                <Grid
                  item
                  component="form"
                  container
                  direction="column"
                  p="2em"
                  // onSubmit={formik.handleSubmit}
                >
                  <Grid item py="1em">
                    <TextField
                      id="email"
                      name="email"
                      label={t("email", { ns: "fields" })}
                      fullWidth
                    />
                  </Grid>

                  <Grid item py="1em">
                    <PasswordField
                      name="password"
                      label={t("password", { ns: "fields" })}
                      id="password"
                      fullWidth
                    />
                  </Grid>

                  <Grid
                    item
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    pt="1em"
                  >
                    {/* <RememberCheck onChange={formik.handleChange} /> */}
                    <Typography color="primary.dark">{t("forgot")}</Typography>
                  </Grid>

                  <Grid item container direction="column" spacing={3} py="3em">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        sx={{ py: "1em" }}
                      >
                        <Typography fontWeight="500">{t("login")}</Typography>
                      </Button>
                    </Grid>

                    <Grid item>
                      <Button
                        aria-label="Google"
                        variant="contained"
                        fullWidth
                        sx={{ py: "1em" }}
                      >
                        {/* <GoogleIcon /> */}
                        <Typography fontWeight="500" px="1em">
                          Login with Google
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
