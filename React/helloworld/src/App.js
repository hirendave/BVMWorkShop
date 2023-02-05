import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Hello from './Hello';
import Counter from './Counter';
import LifeCycle from './LifeCycle';
import EnhancedLikes from "./LikesCount";
import EnhancedComments from "./CommentsCount";


function App() {
  return (
    <>
    <Welcome />
    <Hello name="Hiren" designation="Tech Lead"/>
    <Hello name="Rajesh"/>
    <Hello />
    <Counter counter="5"/>
    <LifeCycle initialCounter="5"/>
    <EnhancedLikes />
    <EnhancedComments />
    </>
  );
}

export default App;
