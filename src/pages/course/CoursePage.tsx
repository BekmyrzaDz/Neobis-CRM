import React from "react"
import CardExample from "../../modules/CoursePage/components/Card/Card"
import Header from "../../modules/CoursePage/components/Header/Header"

type Props = {}

const items = [1, 2, 3, 4, 5, 6, 7, 8]

const CoursePage = (props: Props) => {
  return <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
    <Header />
    <div style={{ margin: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
      {
        items.map(item => <CardExample />)
      }
    </div>
  </div>
}

export default CoursePage
