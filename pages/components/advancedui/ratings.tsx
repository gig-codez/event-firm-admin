import React, { ReactElement, useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import ReactRating from "react-rating";
import PropTypes from "prop-types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import StarsIcon from "@mui/icons-material/Stars";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CircleIcon from "@mui/icons-material/Circle";
import Seo from '../../../shared/layout-components/seo/seo';


const Ratings = () => {

  const [ratingValue, setRatingValue] = useState<number | null>(null);
  const [ratingValue1, setRatingValue1] = useState<number | null>(null);
  const handleRatingChange1 = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
      setRatingValue1(newValue); // Update the rating value when the user clicks
  };
  const handleRatingChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
      setRatingValue(newValue); // Update the rating value when the user clicks
  };

  const handleResetRating = () => {
      setRatingValue(null); // Clear the rating when the button is clicked
  };

  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState<any>(-1);

  const labels: string[] = ['Poor', 'Fair', 'Good', 'Excellent', 'Perfect'];
  function getLabelText(value: number) {
      return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  return (
    <>
        <Seo title="Ratings"/>

    <PageHeader title="Rating" item="Advanced UI" active_item="Rating"/>


    <Row>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Rater
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Show Some <span className="text-danger">&#10084;</span> with rating :</p>
                                <Rating name="clickable-rating"
                                    value={ratingValue1}
                                    onChange={handleRatingChange1} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                5 star rater with steps
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Dont forget to rate the product :</p>
                                <Rating name="half-rating" value={null} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Custom messages
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Your rating is much appreciated&#128079; :</p>
                                <Box sx={{ '& > legend': { mt: 2 } }} >
                                    <Rating name="no-value" size="large" value={3} max={5} />
                                </Box>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Unlimited number of stars readOnly
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                                <Stack spacing={1} className="rating-stars block my-rating-7">
                                    <Rating name="half-rating-read" value={3} max={10} size="large" readOnly />
                                </Stack>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                5 Star rater with custom isBusyText and simulated backend
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                                <Rating name="no-value" value={null} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                On hover event
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Please give your valuable rating :</p>
                                <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={0.5}
                                        getLabelText={getLabelText}
                                        onChange={(_event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(_event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    {value !== null && (
                                        <Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>
                                            <span className="live-rating badge bg-success-transparent ms-3">
                                                {labels[hover !== -1 ? hover : value]}
                                            </span>
                                        </Box>
                                    )}
                                </Box>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Clear/reset rater
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
                                <div className="d-flex flex-wrap align-items-center">
                                    <Rating
                                        name="clickable-rating"
                                        value={ratingValue}
                                        onChange={handleRatingChange} // Handle rating change when the user clicks
                                    />
                                    <Button
                                        variant='danger-light'
                                        className="btn btn-icon btn-sm ms-3"
                                        id="rater-reset-button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Reset"
                                        onClick={handleResetRating}
                                    >
                                        <i className="ri-restart-line"></i>
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
    </>
  )
}
Ratings.layout = "Contentlayout"

export default Ratings