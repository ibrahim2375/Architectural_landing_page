import axios from 'axios'
//components
import Head from '../components/Layouts/Head'
import Landing from '../components/Home/Landing'
import NumbersSection from '../components/Home/NumbersSection'
import About from '../components/Home/About'
import ProjectsSection from '../components/Home/ProjectsSection'
import FeedBack from '../components/Home/FeedBack'

export default function Home({ feedback }) {
  return (
    <div>
      <Head title="Home" />
      <Landing />
      <NumbersSection />
      <About />
      <ProjectsSection />
      <FeedBack feedback={feedback}/>
    </div>
  )
}
export async function getServerSideProps() {
  const feedback_res = await axios.get(`${process.env.REACT_APP_API}/api/feedback`);
  const feedback = await feedback_res.data;

  return {
    props: {
      feedback: feedback
    },
  }
}

