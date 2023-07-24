import PublicIcon from '@mui/icons-material/Public';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import RoundButton from 'Components/RoundButton/RoundButton';
import { AWSIllustrationsUrl, IllustrationNames } from 'Constants/AWS';
import { ErrorHeader, ErrorImage } from 'Styles/common.styles';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <ErrorHeader>Nothing to see here!</ErrorHeader>
      <RoundButton onClick={() => navigate('/')}>
        Go to home page <PublicIcon style={{ marginLeft: '0.6rem' }} />
      </RoundButton>
      <ErrorImage src={AWSIllustrationsUrl + IllustrationNames.notFound} />
    </>
  );
}

export default React.memo(NotFound);
