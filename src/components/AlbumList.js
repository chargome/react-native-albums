import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

const API_URL = 'http://rallycoding.herokuapp.com/api/music_albums';

const AlbumList = () => {

  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    fetchAlbumData();
  }, []);

  const fetchAlbumData = async () => {
    const response = await axios.get(API_URL);
    setAlbumData(response.data);
  };

  const renderAlbum = (detailData, index) => (
    <AlbumDetail key={index} album={detailData} />
  );

  return (
    <ScrollView>
      {albumData.map(renderAlbum)}
    </ScrollView>
  );
};

export default AlbumList;
