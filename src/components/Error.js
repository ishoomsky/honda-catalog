import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

function Error() {

    return (
    <Container>
      <Grid  align='center' item xs={12} sm={12} lg={12}>
        <Typography align={'center'} variant={'p'} color={'error'}>
            Возникла ошибка при загрузке данных!{<br />} Попробуйте перезагрузить страницу или обратитесь в службу поддержки:)
        </Typography>
      </Grid>
    </Container>
    );
}

export default Error;
