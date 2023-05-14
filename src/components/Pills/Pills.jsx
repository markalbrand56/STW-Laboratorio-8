import React, { useState } from "react"
import PropTypes from "prop-types"
import { MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit"
import styles from "./Pills.module.css"
import "mdb-react-ui-kit/dist/css/mdb.dark.min.css"

function Pills({ tabs, label, onChange }) {
    const [activeTab, setActiveTab] = useState(0)

    const handleClick = (index) => {
        setActiveTab(index)
    }

    return (
        <div className={styles.PillsContainer}>
            <span>{label}</span>
            <MDBTabs pills className="flex-column text-center">
                {tabs.map((tab, index) => (
                    <MDBTabsItem key={tab.label}>
                        <MDBTabsLink
                            onClick={() => {
                                handleClick(index)
                                onChange({ target: { value: tab.label } })
                            }}
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
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Pills
