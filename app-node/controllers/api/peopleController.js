const { Router } = require('express');
const router = Router();
const {
    getPeopleInfoFromSalesLoftAPI,
    getUniqueCharactersFrequencyCountEmails
} = require('../../services/peopleService');
const {getPeopleListCustom} = require('../../utils/peopleUtils');

router.get('/', (req, res) => {
    getPeopleInfoFromSalesLoftAPI()
        .then((peopleInfo) => {
            const {data} = peopleInfo;
            res.send(getPeopleListCustom(data.data));
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });
});

router.get('/charactersCount', async (req, res) => {
    getUniqueCharactersFrequencyCountEmails()
        .then((uniqueCharactersFrequencyList) => {
            res.send(uniqueCharactersFrequencyList);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });
});

router.get('/duplicates', (req, res) => {
    res.send('get possible duplicates')
});

module.exports = router;