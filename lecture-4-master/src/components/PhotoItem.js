import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/imageModal';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      <LazyLoad offset={500}>
        <Image src={urls.small} alt={alt} onClick={openModal} />
      </LazyLoad>
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
`;

export default PhotoItem;
