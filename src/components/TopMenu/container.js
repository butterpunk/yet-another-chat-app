import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled, { css } from 'styled-components';

const DisplayAppBar= styled(AppBar)`
  background-color: #404041;
`;

function TopMenu(props) {
    const { user } = props;
    return (
        <DisplayAppBar position="static">
        <Toolbar>
            <Typography variant="h6">
              {user.avatar} {user.name}
            </Typography>
        </Toolbar>
        </DisplayAppBar>
    );
}

export default TopMenu;