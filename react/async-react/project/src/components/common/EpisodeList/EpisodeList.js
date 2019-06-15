import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import { Episode } from '../Episode/Episode';

export const EpisodeList = ({ episodes }) => {
    return (<Carousel>
        {
            episodes && episodes.map(episode => (
                <Carousel.Item>
                    <Episode {...episode} key={episode.id} onClick={() => {}} />
                </Carousel.Item>
            ))
        }
    </Carousel>)
}

EpisodeList.propTypes = {
    episodes: PropTypes.array,
}