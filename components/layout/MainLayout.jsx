import Contents from '../Contents/Contents'
import Side from '../Side/Side'
import Nav from '../Nav/Nav'

function MainLayout() {
  return (
   <section id="main-layout">
    <Nav/>
    <Contents />
    <Side/>
   </section>
  )
}

export default MainLayout