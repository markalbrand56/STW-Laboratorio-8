import React, { useState } from "react"
import PropTypes from "prop-types"
import { MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit"
import styles from "./Pills.module.css"
import "mdb-react-ui-kit/dist/css/mdb.dark.min.css"

function Pills({ tabs, label }) {
    const [activeTab, setActiveTab] = useState(0)

    const handleClick = (index) => {
        setActiveTab(index)
        console.log(index)
    }

    return (
        <div className={styles.PillsContainer}>
            <span>{label}</span>
            <MDBTabs pills className="flex-column text-center">
                {tabs.map((tab, index) => (
                    <MDBTabsItem key={tab.label}>
                        <MDBTabsLink
                            onClick={() => handleClick(index)}
                            active={activeTab === index}
                        >
                            {tab.label}
                        </MDBTabsLink>
                    </MDBTabsItem>
                ))}
            </MDBTabs>
        </div>
    )
}

Pills.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
}

export default Pills
