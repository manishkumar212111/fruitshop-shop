import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Footer = ( { loggedIn } ) => (
    <div>
        This is footer
    </div>
);

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
} );

export default connect( mapStateToProps )( Footer );
