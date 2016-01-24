import * as models from '../models';


module.exports = function(request, reply) {
    const locale = 'en_us';
    let parts = request.params.parts.split('/');

    console.log(parts);

};
