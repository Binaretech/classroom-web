import {
  Button,
  FormControlLabel,
  Grid,
  Paper,
  styled,
  FormGroup,
  TextField,
  Typography,
  ButtonProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import PasswordField from "../../components/PasswordField";
import GoogleIcon from "@mui/icons-material/Google";
import { CheckBox } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const StyledButton = styled(Button)({
  fontWeight: 700,
  padding: "0.9rem 0",
});

const GoogleButton = styled(StyledButton)<ButtonProps>(({ theme }) => ({
  background: theme.palette.grey["900"],
}));

interface Inputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function LoginView() {
  const { t } = useTranslation(["login", "attributes"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
              <Grid item p="2rem 5rem">
                <Grid item p="2rem">
                  <Typography
                    variant="h2"
                    align="center"
                    fontSize="2.25rem"
                    fontWeight="400"
                  >
                    {t("title", { ns: "login" })}
                  </Typography>
                </Grid>
                <FormGroup onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("email")}
                        label={t("email", { ns: "fields" })}
                        InputLabelProps={{
                          className: "capitalize",
                        }}
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    </Grid>

                    <Grid item py="1em">
                      <PasswordField
                        {...register("password")}
                        label={t("password", { ns: "fields" })}
                        InputLabelProps={{
                          className: "capitalize",
                        }}
                        fullWidth
                      />
                    </Grid>

                    <Grid
                      item
                      container
                      justifyContent="space-between"
                      alignItems="center"
                      py="2rem"
                    >
                      <FormControlLabel
                        control={<CheckBox color="primary" />}
                        label="Label"
                        sx={{ margin: "0" }}
                      />

                      <Typography color="primary.dark">
                        {t("forgot")}
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      container
                      direction="column"
                      spacing={3}
                      py="1rem"
                    >
                      <Grid item>
                        <StyledButton
                          variant="contained"
                          color="primary"
                          fullWidth
                          type="submit"
                        >
                          <Typography fontWeight="500">{t("login")}</Typography>
                        </StyledButton>
                      </Grid>

                      <Grid item>
                        <GoogleButton
                          aria-label="Google"
                          variant="contained"
                          fullWidth
                        >
                          <GoogleIcon />
                          <Typography fontWeight="500" px="1em">
                            Login with Google
                          </Typography>
                        </GoogleButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </FormGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
