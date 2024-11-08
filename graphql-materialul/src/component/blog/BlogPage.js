import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import Loader from "./../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";

function BlogPage() {
  const { slug } = useParams();

  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: {
      slug,
    },
  });

  if (loading) return <Loader />;
  if (error) return <h4>somethinf went wrong</h4>;

  console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="text.praimary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackIosIcon
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: "15" }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
