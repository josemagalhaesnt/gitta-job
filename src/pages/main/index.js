import React, { Component } from 'react';
import api from '../../services/api';
import './styles.scss';
import FilterBar from '../../components/FilterBar';
import parse from 'html-react-parser';
import { formatDate } from '../../utils/dateUtil';

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

    formatHTML = (data) => {
        const sanitizedHTML = parse(data);

        return sanitizedHTML;
    };

    render() {
        const { jobPositions } = this.state;

        return (
            <div className="JobListContainer">
                <FilterBar />
                <div className="ui divided items">
                    {jobPositions &&
                        jobPositions.map((job) => (
                            <section key={job.id} className="item">
                                <div className="ui tiny image">
                                    <img src={job.company_logo} title={job.company} alt={job.company} />
                                </div>
                                <div className="content">
                                   {/*  <span className="ui right floated date">{formatDate(job.created_at)}</span> */}
                                    <header className="header">
                                        <a href="/">{this.formatResponse(job.title)}</a>
                                    </header>
                                    <div className="meta">
                                        <span className="category">{this.formatResponse(job.type)}</span>
                                        <span className="ui right floated">{this.formatResponse(job.location)}</span>
                                    </div>

                                    <div className="description">{this.formatHTML(job.description)}</div>

                                    <aside className="extra">
                                        <div className="ui right floated button">More Info</div>
                                    </aside>
                                </div>
                            </section>
                        ))}
                </div>
            </div>
        );
    }
}
