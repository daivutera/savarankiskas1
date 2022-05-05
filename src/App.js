import './App.css';

import Block from './components/Block/Block';
import Hero from './components/Hero/Hero';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='App'>
      <Button color='primary' type='submit'>
        primary
      </Button>
      <Button color='success' type='reset'>
        success
      </Button>
      <Button color='danger' type='button'>
        danger
      </Button>
      <Hero
        color='danger'
        title='Danger title'
        subtitle='Red color means danger'>
        99% done plugins webpack-hot-middlewarewebpack built preview
        08e3a0770d745ed39db1 in 2308ms webpack building... 99% done plugins
        webpack-hot-middlewarewebpack built preview 2fd141079815bb02453d in
        1861ms
      </Hero>
      <Hero
        color='success'
        title='Success title'
        subtitle='Green color means success'>
        99% done plugins webpack-hot-middlewarewebpack built preview
        08e3a0770d745ed39db1 in 2308ms webpack building... 99% done plugins
        webpack-hot-middlewarewebpack built preview 2fd141079815bb02453d in
        1861ms
      </Hero>

      <Block color='primary'>
        99% done plugins webpack-hot-middlewarewebpack built preview
        08e3a0770d745ed39db1 in 2308ms webpack building... 99% done plugins
        webpack-hot-middlewarewebpack built preview 2fd141079815bb02453d in
        1861ms
      </Block>
      <Block color='success'>
        99% done plugins webpack-hot-middlewarewebpack built preview
        08e3a0770d745ed39db1 in 2308ms webpack building... 99% done plugins
        webpack-hot-middlewarewebpack built preview 2fd141079815bb02453d in
        1861ms
      </Block>
      <Block color='danger'>
        99% done plugins webpack-hot-middlewarewebpack built preview
        08e3a0770d745ed39db1 in 2308ms webpack building... 99% done plugins
        webpack-hot-middlewarewebpack built preview 2fd141079815bb02453d in
        1861ms
      </Block>
    </div>
  );
}

export default App;
