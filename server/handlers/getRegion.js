import * as models from '../models';


module.exports = function(request, reply) {
    const locale = 'en_us',
          country = 'HK';
    let regionId = request.params.regionId;

    if (regionId) {

    } else {

        models.Region.findAll({
            where: {country_id: country}
        }).then(function(regions) {
            var arrayRegion = [];

            regions.forEach(function(cinema) {
                arrayRegion.push({
                    id: region.id,
                    name: region[locale]
                });
            });

            reply({data: arrayRegion});
        });

    }

};
