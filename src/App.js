import './App.css';
import React, { useState }from "react";
import Axios from "axios"


function App() { 
  const [farmerNames, setFarmerNames]=useState("");
  const [fatherNames, setFatherNames]=useState("");
  const [addreses, setAddress]=useState("");
  const [categories, setCategory]=useState("");
  const [ages, setAge]=useState("");
  const [mobilenumbers, setMobilenumbers]=useState("");
  const [emailIdies, setEmailId]=useState("");
  const [adharcardNo, setAdharcard]=useState("");
  const [spnfId, setSpnf]=useState("");
  const [genders, setGender]=useState("");
  const [checkYOS, setYOS] = useState("");
  const [checkSOIU, setcheckSOIU] = useState(false);
  const [checkCRF, setcheckCRF] = useState(false);
  const [cows, setCow]=useState("");
  const [checkLIOF, setcheckLIOF] = useState(false);
  const [TotalLand, setTotalLand] = useState("");
  const [checkTA, setcheckTA] = useState(false);
  const [dates, setDate] = useState("");
  const [venues, setVenue] = useState("");
  const [trainers, setTrainer] = useState("");
  const [durations, setDuration] = useState("");
  const [checkUSPSPNFI, setcheckUSPSPNFI] = useState(false);
  const [checkCAPEU, setcheckCAPEU] = useState(false);
  const [checkESOIU, setcheckESOIU] = useState(false);
  const [checkSSFFSP, setcheckSSFFSP] = useState(false);
  const [checkCIU, setcheckCIU] = useState(false);
  const [finalScores, setFinalScore] = useState("");

  function saveUser(){
    const Data={
      farmer_Name: farmerNames,
      father_Name: fatherNames,
      address: addreses,
      category: categories,
      age: ages,
      mobile_No:mobilenumbers,
      email_Id: emailIdies,
      adharcard:adharcardNo,
      spnfId :spnfId,
      gender: genders,
      year_of_starting: checkYOS,
      locally_sourced_organic_input_used: checkSOIU,
      crop_rotation_followed:checkCRF,
      cow:cows,
      land_inventory_of_farmer:checkLIOF,
      total_land:TotalLand,
      trained_attend:checkTA,
      date:dates,
      venue:venues,
      trainer:trainers,
      duration:durations,
      using_self_prepared_spnf_input:checkUSPSPNFI,
      concoctions_and_plan_extract_used:checkCAPEU,
      external_sourced_organic_input_used:checkESOIU,
      seperate_storage_facility_for_spnf_produce:checkSSFFSP,
      chemical_input_used:checkCIU,
      finalScore:finalScores,
    }
    console.log(Data);
    Axios.post("http://localhost:3000/posts",Data).then(
      (Response)=>{
        console.log(Response);
      })
  };
  
  const handleCheckLSOIU = () =>{
    setcheckSOIU(!checkSOIU);
  }
  const handleCheckCRF = () =>{
    setcheckCRF(!checkCRF);
  }
  const handleCheckLIOF = () =>{
    setcheckLIOF(!checkLIOF);
  }
  const handleCheckTA = () =>{
    setcheckTA(!checkTA);
  }
  const handleCheckUSPSPNFI = () =>{
    setcheckUSPSPNFI(!checkUSPSPNFI);
  }
  const handleCheckCAPEU = () =>{
    setcheckCAPEU(!checkCAPEU);
  }
  const handleCheckESOIU = () =>{
    setcheckESOIU(!checkESOIU);
  }
  const handleCheckSSFFSP = () =>{
    setcheckSSFFSP(!checkSSFFSP);
  }
  const handleCheckCIU = () =>{
    setcheckCIU(!checkCIU);
  }
  return (
    <div className="App">
      <h1>Farmer Form</h1>
      <label>
        Name Of Farmer:
        <input type="text" value={farmerNames} onChange={(e)=>{setFarmerNames(e.target.value)}} name="name"/> <br/>
      </label>

      <label>
        Father's Name:
        <input type="text" value={fatherNames} onChange={(e)=>{setFatherNames(e.target.value)}} name="second-name"/> <br/>
      </label>

      <label>
       Address:
       <input type="text" value={addreses} onChange={(e)=>{setAddress(e.target.value)}} name="Address"/> 
       </label>
      <br/>

        <label>
          Category:
          <select value={categories} onChange={(e)=>{setCategory(e.target.value)}}>
            <option value="General">General</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
          </select>
        </label><br/>
        

      <label>
         Age:
         <input type="number" name="Address" value={ages} onChange={(e)=>{setAge(e.target.value)}}/> 
       </label><br/>

      <label>
         Mobile Number:
         <input type="text" value={mobilenumbers} onChange={(e)=>{setMobilenumbers(e.target.value)}} name="MobileNumber"/> 
       </label>
      <br/>

      <label>
         Email Id:
         <input type="email" value={emailIdies} onChange={(e)=>{setEmailId(e.target.value)}} name="email"/> 
       </label>
      <br/>

      <label>
         Adharcard:
         <input type="number" value={adharcardNo} onChange={(e)=>{setAdharcard(e.target.value)}} name="Adharcard"/> 
       </label>
      <br/>

      <label>
         SPNF ID:
         <input type="text" value={spnfId} onChange={(e)=>{setSpnf(e.target.value)}} name="spnfid"/> 
      </label>
       <br/>

      <label>
        Gender:
         <input type="radio" value={genders} onChange={(e)=>{setGender(e.target.value)}} value="Male" name="gender" /> Male
         <input type="radio" value={genders} onChange={(e)=>{setGender(e.target.value)}}  value="Female" name="gender" /> Female
       </label>
       <br/>

      <label>
        Year Of Starting SPNF:<br/>
         <input type="radio" value={checkYOS} onChange={(e)=>{setYOS(e.target.value)}} value="2018" name="Year Of Starting" />2018 <br/>
         <input type="radio" value={checkYOS} onChange={(e)=>{setYOS(e.target.value)}} value="2019" name="Year Of Starting" />2019 <br/>
         <input type="radio" value={checkYOS} onChange={(e)=>{setYOS(e.target.value)}} value="2020" name="Year Of Starting" />2020
       </label>
       <br/>

      <label>
         <input type="checkbox" checked={checkSOIU}  onClick={handleCheckLSOIU} name="Locally Sourced Organic Input Used" />
         Locally Sourced Organic Input Used
       </label>
       <br/>

      <label>
         <input type="checkbox" checked={checkCRF} onClick={handleCheckCRF} name="Crop rotation Followed" />
         Crop Rotation Followed
       </label>
       <br/>

      <label>
         <input type="radio" value={cows} onChange={(e)=>{setCow(e.target.value)}} value="Desi" name="Cow"/> Desi
         <input type="radio" value={cows} onChange={(e)=>{setCow(e.target.value)}} value="Indigenous Cow" name="Cow"/> Indigenous Cow
       </label>
       <br/>

       <label>
         <input type="checkbox" checked={checkLIOF}  onClick={handleCheckLIOF} name="Land Inventory of Farmer"/>
         Land Inventory of Farmer
       </label>
       <br/>

       <label>
         Total Land:
         <input type="radio" value={TotalLand} onChange={(e)=>{setTotalLand(e.target.value)}} value="Land Under SPNF" name="TotalLand"/> Land Under SPNF
         <input type="radio" value={TotalLand} onChange={(e)=>{setTotalLand(e.target.value)}} value="75% of Total Cultivated Land" name="TotalLand"/>75% of Total Cultivated Land
        
       </label>
      <br/>

       <label>
         <input type="radio" value={checkTA}  onClick={handleCheckTA} name="training attend"/>Training Attend
       </label>
       <br/>

       <label>
         Date:
         <input type="date" value={dates} onChange={(e)=>{setDate(e.target.value)}} name="date"/>
       </label>
       <br/>

       <label>
         Venue:
         <input type="text" value={venues} onChange={(e)=>{setVenue(e.target.value)}} name="venue"/>
       </label>
       <br/>

       <label>
         Duration:
         <input type="text" value={durations} onChange={(e)=>{setDuration(e.target.value)}} name="Duration"/>
       </label>
       <br/>

       <label>
         Trainer:
         <input type="text" value={trainers} onChange={(e)=>{setTrainer(e.target.value)}} name="Trainer"/>
       </label>
       <br/>

       <label>
         <input type="radio" value={checkUSPSPNFI}  onClick={handleCheckUSPSPNFI} name="Using Self Prepared SPNF Input"/>Using Self Prepared SPNF Input
       </label>
       <br/>

       <label>
         <input type="checkbox" checked={checkCAPEU}  onClick={handleCheckCAPEU} name="Concoctions And Planf Extract Used"/>
         Concoctions And Planf Extract Used
       </label>
       <br/>

       <label>
         <input type="checkbox" checked={checkESOIU} onClick={handleCheckESOIU} name="External Sourced Organic Input Used"/>
         External Sourced Organic Input Used
       </label>
       <br/>

       <label>
         <input type="radio" value={checkSSFFSP} onClick={handleCheckSSFFSP} name="Seperate Storage Facility For SPNF Produce"/>
         Seperate Storage Facility For SPNF Produce
       </label>
       <br/>

       <label>
         <input type="checkbox" checked={checkCIU} onClick={handleCheckCIU} name="Chemical Input Used"/>
         Chemical Input Used
       </label>
       <br/>

       <label>
         Final Score:
         <input type="number" value={finalScores} onChange={(e)=>{setFinalScore(e.target.value)}} name="Chemical Input Used"/>
       </label>
       <br/>

      <button type="button" onClick={saveUser}>Save user Data</button>
    </div>
  );
}

export default App;
