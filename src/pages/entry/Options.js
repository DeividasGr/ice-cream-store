import { useEffect, useState } from 'react';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';
import AlertBanner from '../../components/AlertBanner';
import axios from 'axios';
import Row from 'react-bootstrap/Row';

function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemConponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;

  const optionItems = items.map((item) => (
    <ItemConponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}

export default Options;
