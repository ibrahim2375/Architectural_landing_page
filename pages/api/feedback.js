import feddback from '../../data/feedback.json'
// todo: some data api to your app
export default function handler(req, res) {
    res.status(200).send(feddback);
}
