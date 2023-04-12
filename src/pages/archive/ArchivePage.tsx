import React from "react"
import ArchiveHeader from '../../modules/Archive/components/ArchiveHeader/ArchiveHeader'

type Props = {}

const ArchivePage = (props: Props) => {
  return <div style={{ backgroundColor: '#F1F1F1', minHeight: '100vh' }}>
    <ArchiveHeader />
    {/* <Tabs /> */}
  </div>
}

export default ArchivePage
