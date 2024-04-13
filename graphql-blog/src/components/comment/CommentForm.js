import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { Grid, Typography, TextField, Button } from "@mui/material";

import { SEND_COMMENT } from "../../graphql/mutations";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../shared/Loader";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  
  if (loading) return <Loader />;

  if (error) return <h4>Something went error...</h4>;

  console.log(data);

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("تمام فیلد هارو پر کن...باتشکر (。_。)", {
        position: "top-center",
      });
    }
  };

  if (data) {
    toast.success("کامنت ارسال شد و منتظر تایید میباشد", {
      position: "top-center",
    });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت{" "}
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
