import Hero from './Hero';

export const SuccessHero = () => (
  <Hero color='success' title='Good job' subtitle='Also could be better'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
    exercitationem quibusdam sunt eligendi deleniti, odio dolores quidem quia
    enim architecto praesentium voluptates, officiis ducimus alias libero odit,
    vel molestiae veniam!
  </Hero>
);
export const DangerHero = () => (
  <Hero color='danger' title='Good job' subtitle='Also could be better'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
    exercitationem quibusdam sunt eligendi deleniti, odio dolores quidem quia
    enim architecto praesentium voluptates, officiis ducimus alias libero odit,
    vel molestiae veniam!
  </Hero>
);
export default {
  title: 'Hero',
  component: Hero,
};
