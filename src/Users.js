import React, {Component} from 'react';
// import Modal from 'react-modal';
export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let self = this;
        fetch('http://localhost/test_db/users.php', {
            method: 'GET'
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            return response.json();
        }).then(function (data) {
            console.log(data);
            self.setState({users: data});
        }).catch(err => {
            console.log('caught it!', err);
        });

        // const response = '{"result":{"hotel_id":"200435","parent_hotel":"0","supplier_id":"HOTSP1496822049","suppliertype":"","property_type":"4","markup":"0.00","admin_commission":"0.00","commission_type":"","city_name":"","city_id":"18770","salutation":"","contact_person_name":"","contact_person_mobile":"","agent_name":"","firstname":"","lastname":"","agent_address":"","hotel_name":"","hotel_slug_url":"","property_slug_url":"Alkamil-America","hotel_address":"united","country":"ae","timezone_name":"Europe\\/London","state":"","city":"","room_quantity":"3","contact_person":"","office_no":"0","mobile_no":"0","fax_no":"","website":"alkamilianamerica.com","hotel_desc":"","loc_info":"","city_info":"","amenities":"","map":"","star_rate":"0","hotel_services":"","room_services":"","main_image":"","main_image_id":"0","suppl_type":"0","contact_email":"alkamilamerica@sdfsdalkamilbooks.com","gmail_otp_code":"0","otp_send_time":"","otp_expire_time":"","status":"Active","is_verified":"0","popular_rating":"0","agent_contact_phone":"","reserv_sal":"","reserv_firstname":"","reserv_lastname":"","reserv_phone":"0","reserv_mobileno":"0","reserv_email":"","hotel_style":"","bdo":"0","single_or_chain":"","countrycode":"","countrycodeR":"","country_code_m":"","country_code_Rm":"","cur_type":"","child_free_stay":"0","child_paid_stay":"0","own_hotel":"","is_group_company":"no","group_manager_id":"0","street_address":"","phone_no":"3453453445","alt_phone_no":"3453453455","property_name":"Alkamil America","chennal_manager":"yes","channel_username":"rahul","channel_password":"cmFodWwxMjM=","use_parent_crediential":null,"cm_username":null,"cm_password":null,"zip_code":"123123","currency":"AED","progress_status":"7","date_created":"2018-05-09 13:24:16","date_modified":"2018-05-09 13:24:16","guest_review_video":null,"hotel_video":null,"phone_code":"","alt_phone_code":"","phone_country":"","alt_phone_country":"","channel_manager_id":"1","is_bookable":"1","password":"","main_supplier":"0","sub_supplier_id":"0","username":"","giata_hotel_id":"0","timeout_promotion":"1","timeout_reservation":"1","rsv_otp_send_time":null,"rsv_otp_expire_time":null,"kamil_id":"0","area_id":"1284","country_name":"Colombia"}}';
        // console.log(JSON.parse(response).result);
        // this.setState({users: JSON.parse(response).result});
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Hotel Id</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(member =>
                            <tr key={member.hotel_id}>
                                <td>{member.hotel_id} </td>
                                <td><a>Edit</a>|<a>Delete</a></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}