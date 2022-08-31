import { AndroidRounded, Apple, ArrowDownward } from '@mui/icons-material';
import {
  // Button,
  // Card,
  // Container,
  Divider,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import Image from 'next/image';

function Hero() {

  // TODO: Scroll on click
  const handleScroll = (): void => {
    alert('to be added')
  }

  return (
    <Grid border={'none'} position={'relative'} bgcolor={'white'} p={5} height={'90vh'} display={'flex'} alignItems={'center'} px={5} >
      <Grid item xs={12} container justifyContent={'end'}>
        <Grid item sm={5} p={5} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} >
          <Grid>
            <Typography component={'h1'} fontSize={60} > Lorem ipsum dolor sit  </Typography>
            <Typography variant={'h6'} fontSize={20} > amet consectetur, adipisicing elit. Voluptatem commodi ipsam eligendi doloremque inventore consequatur obcaecati assumenda illum ducimus modi officia placeat ipsum alias, qui unde ea fugiat iste odio!</Typography>
          </Grid>
          <Grid display={'flex'} flexDirection={'column'} alignItems={'start'} >
            <IconButton>
              <AndroidRounded />
              <Typography variant='overline' ml={1} >Download from Playstore</Typography>
            </IconButton>
            <IconButton>
              <Apple />
              <Typography variant='overline' ml={1} >Download from App store</Typography>
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs={12} sm={7} >
          <Image
            // loader={sanityIoImageLoader} 
            // placeholder="blur"
            layout="responsive"
            src={'/static/images/placeHolders/covers/heroImage.jpg'}
            quality={'100'}
            width={1000}
            height={550}
          />
        </Grid>
      </Grid>
      <IconButton
        style={{
          position: 'absolute',
          bottom: 30,
          left: '48%'
        }}
        onClick={handleScroll}
        >
        <ArrowDownward />
      </IconButton>
    </Grid>
  );
}

export default Hero;
