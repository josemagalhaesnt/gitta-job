class JobModel {
    constructor({ id, title, location, company, companyLogo, type, createdAt }) {
        this.id = id;
        this.title = title;
        this.location = location || '';
        this.company = company || '';
        this.companyLogo = companyLogo || '';
        this.type = type || '';
        this.createdAt = createdAt || undefined;
    }

    clone() {
        return new JobModel(this);
    }

    getJobPositions = async (params) => {
        const response = await api.get('/positions.json', { params });
        return new JobModel(
            (this.id = response.data.id),
            (this.title = response.data.title),
            (this.location = response.data.location),
            (this.type = response.data.type),
            (this.company = response.data.company),
            (this.companyLogo = response.data.company_logo),
            (this.createdAt = response.data.created_at),
        );
    };
}

export default JobModel;
