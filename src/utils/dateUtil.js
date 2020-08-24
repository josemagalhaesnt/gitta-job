import moment from 'moment';

export const formatDate = (data) => {
    return moment(data, ['MM-DD-YYYY', 'YYYY-MM-DD']);
};