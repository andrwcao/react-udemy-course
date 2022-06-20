import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({id, description, urls}) => {
        return <img alt={description} key={id} src={urls.regular}></img>
    });
    console.log(props.images);
    return (
        <div>{images}</div>
    );
}

export default ImageList;