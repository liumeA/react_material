// import React from 'react'
// import Picker from "antd-mobile/es/picker/index";
// import {Typography, Zoom} from "@material-ui/core";
//
//
// const CustomChildren = props => (
//     <div
//         onClick={props.onClick}
//         style={{backgroundColor: '#fff', paddingLeft: 15}}
//     >
//         <div className="test"
//              style={{display: 'flex', height: '45px', lineHeight: '45px', position: 'relative', borderBottom: 0}}>
//             <div style={{
//                 flex: 1,
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap'
//             }}>{props.children}</div>
//             <div style={{textAlign: 'right', color: '#888', marginRight: 15}}>{props.extra}</div>
//         </div>
//     </div>
// );
//
// export default class Location extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             station: [],
//         };
//     }
//
//     render() {
//         let antdDistrict = [];
//         let districtData = require('./Locations.json');
//         Object.keys(districtData).forEach((index) => {
//             let itemLevel1 = {};
//             let itemLevel2 = {};
//             // itemLevel1.value = districtData[index].code;
//             itemLevel1.value = districtData[index].name;
//             itemLevel1.label = districtData[index].name;
//             itemLevel1.children = [];
//             let data = districtData[index].cities;
//             Object.keys(data).forEach((index) => {
//                 // itemLevel2.value = data[index].code;
//                 itemLevel2.value = data[index].name;
//                 itemLevel2.label = data[index].name;
//                 itemLevel2.children = [];
//                 let data2 = data[index].districts;
//                 let itemLevel3 = {};
//                 itemLevel3.children = [];
//                 Object.keys(data2).forEach((index) => {
//                     // itemLevel3.value = index;
//                     itemLevel3.value = data2[index];
//                     itemLevel3.label = data2[index];
//                     itemLevel2.children.push(itemLevel3);
//                     itemLevel3 = {};
//                 });
//                 itemLevel1.children.push(itemLevel2);
//                 itemLevel2 = {};
//             });
//             antdDistrict.push(itemLevel1)
//         });
//         // console.log(antdDistrict);
//         return (
//             <div>
//                 <Zoom in={true}>
//                     <Typography component={"div"}>
//                         <Picker
//                             title="选择地区"
//                             extra="请选择"
//                             data={antdDistrict}
//                             value={this.state.station}
//                             onChange={v => this.setState({station: v})}
//                             onOk={v => this.props.setStations(this.props.keyId, v)}
//                             onClick={() => {
//                                 console.log('xx')
//                             }}
//
//                         >
//                             <CustomChildren>投保站点{this.props.keyId + 1}</CustomChildren>
//
//                         </Picker>
//                     </Typography>
//                 </Zoom>
//             </div>
//         )
//     }
// }
