import React from "react"
import ArchiveHeader from '../../modules/Archive/components/ArchiveHeader/ArchiveHeader';
import Tabs from '../../modules/Archive/components/Tabs/Tabs'

type Props = {}

const ArchivePage = (props: Props) => {
  return <div style={{ backgroundColor: '#F1F1F1', minHeight: '100vh' }}>
    <ArchiveHeader />
    <Tabs />
  </div>
}

export default ArchivePage
