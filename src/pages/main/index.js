import React, { Component } from 'react';
import api from '../../services/api';
import MaterialCard from '../../components/MaterialCard';
import { Typography, Grid } from '@material-ui/core';
import './styles.scss';
import FilterBar from '../../components/FilterBar';

export default class Main extends Component {
    state = {
        jobPositions: [],
    };

    componentDidMount() {
        const params = {};

        this.getJobPositions(params);
    }

    getJobPositions = async (params) => {
        const response = await api.get('/positions.json', { params });
        this.setState({ jobPositions: response.data });
        console.log(this.state.jobPositions);
    };

    formatResponse = (data) => {
        return data.replace(/<\/?[^>]+>/gi, '');
    };

    render() {
        const { jobPositions } = this.state;

        return (
            <div className="JobListContainer">
                <FilterBar />
                <Grid container spacing={2}>
                    {jobPositions &&
                        jobPositions.map((job) => (
                            <Grid key={job.id} item xs={4}>
                                <MaterialCard variant="elevation" actionLink={`/job/details/${job.id}`}>
                                    <Typography color="textSecondary" gutterBottom>
                                        {this.formatResponse(job.title)}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {this.formatResponse(job.location)}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {this.formatResponse(job.type)}
                                    </Typography>
                                </MaterialCard>
                            </Grid>
                        ))}
                </Grid>
            </div>
        );
    }
}
