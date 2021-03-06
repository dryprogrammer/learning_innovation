import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'

import ProjectCard from './ProjectCard';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    margin: 10,
  },
  gridList: {
    width: 900,
    padding: 10,
    // height: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={4}>
        <GridList cols={3} cellHeight={400} spacing={10} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} rows={1} style={{ height: 'auto' }}>
            <ListSubheader component="div" style={{ fontSize: 24 }} > Accreditations </ListSubheader>
          </GridListTile>
          {tileData.slice(0, 2).map(tile => {
            return <ProjectCard {...tile} />;
            const a = (
            <GridListTile key={tile.volunteerId}>
              <img src={'https://www.giving.sg' + tile.Url} alt={tile.DisplayName} />
              <GridListTileBar
                title={tile.DisplayName}
                subtitle={<span>{tile.Suitabilities}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          )
          }
          )}
        </GridList>

      <Paper elevation={4} style={{"position":"fixed","bottom":"10px","left":"10px"}}>
        <Link to='/'>
          <img src='/images/logo.png' height={80}/>
        </Link>
      </Paper>
    </Paper>

  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);