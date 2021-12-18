//Mains functions
window.getSharedValue = function(name){
	// console.log("Requested cookie:",name)
	if(document.cookie.split(name+"=").length != null) return cookieVar = document.cookie.split(name+"=")[1].split(";")[0] || "";
	else{writeSharedValue(name,null);return getSharedValue(name)}
}
window.writeSharedValue = function(name,value){ document.cookie = name+"="+JSON.stringify(value)+";path=/"}
window.createLabelObject = function(name,number){
return `
	<h2 class="membersGroup-v9BXpm container-2ax-kl" aria-label="${name}, 1&nbsp;membre">
		<span aria-hidden="true">${name} — ${number}</span>
	</h2>
`
}

window.getAvatarUrl = function(avatarUrl){
	if(avatarUrl!="")
		return avatarUrl
	else
		return "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"
}

window.createAvatarObject = function(name,image,status){
return `
	<div class="member-3-YXUe container-2Pjhx- clickable-1JJAn8" aria-controls="popout_38" aria-expanded="false" tabindex="-1" index="0" role="listitem" data-list-item-id="members-883328396401213474___0">
		<div class="layout-2DM8Md ${status=='offline'?'offline-3nJYBR':''}">
			<div class="avatar-3uk_u9">
				<div class="wrapper-3t9DeA" role="img" aria-label="" aria-hidden="false" style="width: 32px; height: 32px;">
					<svg width="40" height="32" viewBox="0 0 40 32" class="mask-1l8v16 svg-2V3M55" aria-hidden="true">':""}
						<foreignObject x="0" y="0" width="32" height="32" mask="
						${status!='offline'&&status!="mobile"?'url(#svg-mask-avatar-status-round-32)':''}
						${status=='mobile'?'url(#svg-mask-avatar-status-mobile-32)':''}
						${status=='offline'?'url(#svg-mask-avatar-default)':''}
						">
							<div class="avatarStack-2Dr8S9">
							<img src="${image}" width="128px" height="128px" alt=" " class="avatar-VxgULZ" aria-hidden="true">
							</div>
						</foreignObject>
						${status=="online"?'<rect width="10" height="10" x="22" y="22" fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" mask="url(#svg-mask-status-online)" class="pointerEvents-2zdfdO"></rect>':''}
						${status=="mobile"?'<rect width="10" height="15" x="22" y="17" fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" mask="url(#svg-mask-status-online-mobile)" class="pointerEvents-2zdfdO"></rect>':''}
						${status=="idle"?'<rect width="10" height="10" x="22" y="22" fill="hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)" mask="url(#svg-mask-status-idle)" class="pointerEvents-2zdfdO"></rect>':''}
						${status=="dnd"?'<rect width="10" height="10" x="22" y="22" fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" mask="url(#svg-mask-status-dnd)" class="pointerEvents-2zdfdO"></rect>':''}
						${status=="dnd"?'<rect width="10" height="10" x="22" y="22" fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" mask="url(#svg-mask-status-dnd)" class="pointerEvents-2zdfdO"></rect>':''}
					</svg>
				</div>
			</div>
			<div class="content-3QAtGj">
				<div class="nameAndDecorators-5FJ2dg">
					<div class="name-uJV0GL">
						<span class="roleColor-rz2vM0 desaturateUserColors-1gar-1">${name}</span>
					</div>
				</div>
				<div class="subText-1KtqkB"></div>
			</div>
		</div>
	</div>
	`
}
window.getTypingObject = function(name) {
	return `
		<div class="typing-2GQL18 base-gE7OpD" style="padding-left:10px">
			<img src="https://emoji.gg/assets/emoji/3445_Typing.gif" width="24.5px" height="7px">
			<span class="text-1y-e8-" aria-live="polite" aria-atomic="true">
				<strong>${name}</strong> is writing...
			</span>
		</div>
	`
}

if(document.cookie.indexOf('DWMrolesList')==-1) writeSharedValue('DWMrolesList',[{name:"@everyone",color:"rgb(153, 170, 181)"}])
if(document.cookie.indexOf('DWMwebhookURL')==-1) writeSharedValue('DWMwebhookURL',"")
if(document.cookie.indexOf('DWMaskingme')==-1) writeSharedValue('DWMaskingme',false)
if(document.cookie.indexOf('DWMreload')==-1) writeSharedValue('DWMreload',false)
//Create popup UI
function openPopup() {
	if(document.cookie.indexOf("DWMkey")==-1)
		writeSharedValue("DWMkey",[])
	if(document.getElementById("extStyleElem")==null){
		window.extensionStyleElement = document.createElement("style");
		extensionStyleElement.id = "extStyleElem";
		document.head.appendChild(extensionStyleElement);
		setInterval(()=>{
		extensionStyleElement.innerHTML += `.botTag-1un5a6{display:none}`
		},100)
	}
	const widthPop = 660; //40/100 * screen.availWidth
	const heightPop = 465; //65/100 * screen.availHeight
	popupWindow = window.open("", "newWindow", "menubar=no, status=no, scrollbars=no, menubar=no,toolbar=no,location=no, width=" + widthPop + ", height=" + heightPop);
	popupWindow.document.body.innerHTML = "";
				// <link rel="stylesheet" href="https://www.dropbox.com/s/r331o755enpnc8m/style.css">
				// <link rel="stylesheet" href="https://www.dropbox.com/s/r6j1jq97b3js09h/index.css">
				// <link rel="stylesheet" href="https://www.dropbox.com/s/qd0hp856u0tmb1q/styles.css">
	popupWindow.document.write(`
		<html>
			<head>
				<!--<link rel="stylesheet" href="${getSharedValue('DWMlocation')+'/style.css'}">-->
				<title>Discord Webhook Modifier</title>
				<style>
					select {font-family: 'Times New Roman';background-color: #2F3136;border-radius: 5px;width: 250px;}
					select[multiple]:focus{background-color: #2F3136;.}
					select[multiple]:focus option:checked {color: #000000;background: red linear-gradient(0deg, #cecece 0%, #cecece 100%);outline:none!important;}
					select[multiple]:focus option {color: #FFFFFF;background: #2F3136;}
					select[multiple] option{color: #FFFFFF;background: #2F3136;}
					select:active, select:hover, select:focus-within, select:focus {outline: none;}
					select[multiple] option:focus-within{color: #FFFFFF;}
					option[selected]{color:red;}
					option {
						background-color: #2F3136;
						color: #FFFFFF;
						width: 100%;
						font-size: 16px;
						postion: absolute;
						left: 10px;
						text-align:left;
						overflow-y: hidden;
						overflow-x: hidden;
						scrollbar-width: 100px;
						padding: 5px 10px;
					}

					::-webkit-scrollbar {width: 12px;background-color: transparent;}
					::-webkit-scrollbar-button {display: none;width: 0;height: 0;}
					::-webkit-scrollbar-corner {background-color: transparent;}
					::-webkit-scrollbar-thumb {background-color: #4a4d52;border: 2px solid #282a2d;border-radius: 10px;}
					@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Work+Sans:300,400,700,900");
					* {outline-width: 0;font-family: "Montserrat" !important;}
					body {background: #23272A;}
					form {position: relative;text-align: center;height: 100%;}
					form h1 {
					  margin: 0 0 15px 0;
					  font-family: "Work Sans" !important;
					  font-weight: 700;
					  font-size: 20px;
					  color: #fff;
					  user-select: none;
					  opacity: 0;
					  left: -30px;
					  position: relative;
					  transition: 0.5s ease;
					}

					html,
					body {
					  background: #26262b;
					  width: 100%;
					  height: 100%;
					  text-align: center;
					  content-align: center;
					  line-height: 1.15;
					  overflow: hidden
					}

					button {
					  display: inline-block;
					  font-family: Whitney, "Open Sans", Helvetica, sans-serif;
					  display: inline-block;
					  font-family: Whitney, "Open Sans", Helvetica, sans-serif;
					  font-weight: 600;
					  font-size: 11pt;
					  border-radius: 3px;
					  cursor: pointer;
					  width: 50%;
					  height: 45px;
					  box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.2);
					  text-transform: uppercase;
					}

					form h1.loadIn {left: 0;opacity: 1;}
					button {color: #fff;transition: 100ms linear;}
					button:active {transform: translateX(0px);}
					button {outline: transparent !important;}
					button {background-color: #7289da;border: 2px solid #7289da;}
					.green {background-color: #43b581;border: 2px solid #43b581;}
					.green:hover {transform: translateY(0px);background-color: #37956b;border: 2px solid #37956b;}
					.red {  background-color: #f94339;  border: 2px solid #f94339;}
					.red:hover {  transform: translateY(0px);  background-color: #f82b20;  border: 2px solid #f82b20;}
					button:hover {transform: translateY(0px);background-color: #5e77d4;border: 2px solid #5e77d4;}

					.text.title {
					  font-size: 12px;
					  font-weight: 700;
					  text-transform: uppercase;
					  color: #8e9297;
					  user-select: none;
					}
					input[placeholder]{
						background-color: var(--input-background);
						border-radius: var(--input-radius);
						border: 1px solid rgba(0, 0, 0, 0.3);
						color: var(--input-color);
						display: block;
						font-size: var(--input-font-size);
						font-weight: var(--input-font-weight);
						margin: 0;
						outline-style: none;
						padding: var(--input-padding);
						width: calc(100% - var(--input-padding) * 2);
						max-width: 600px;
						transition: border-color 0.2s ease-in-out;
						font-family: sans-serif;
					}

					:root {
						--input-radius: 3px;
						--input-background: rgba(0, 0, 0, 0.1);
						--input-color: var(--text-default);
						--input-font-size: 16px;
						--input-font-weight: 400;
						--input-padding: 10px;
					}
				</style>
				<div label="profiles" style="position:absolute;left:8px"><br>
				<p class="label title text">Profiles: </p>
					<select id="profileList" style="width:177px;top:8px;" size="4"></select><br>
				<div class="menu dropdown open" style="left:28px;width:200px;top:8px;visibility:hidden;" id="menu">

				</div>
				<div id="menuscript"></div>
					<br><input class="input" id="username" placeholder="Type username and click on '+' button" name="" type="text" value="" style="position:relative;left:15px"><br>
					<button id="addUser" class="green" style="width:88.5px">+</button>
					<button id="removeUser" class="red" style="width:88.5px">-</button>
					<br>
					<span id="selectedUsername" class="label title text"></span><br><br>
				</div>
				<div style="float:right;postion:absolute;margin-right:50px"><br>
					<button id="myButton" style="width:150px">Update role List</button><br>
					<button id="addHimself" style="width:150px">Add me in list</button><br><br>
					<button id="saveConfig" style="width:150px">Save</button><br>
					<button id="loadConfig" style="width:150px">Load</button><br><br>
					<button id="closeApp" style="width:150px">Close</button><br>
					<input type="file" id="fileUpload" hidden="">
				</div>
				<br><br>
				<div label="roleList" id="roleArea" style="position: absolute; top: 316px; left: 264px; visibility: hidden;" class="label title text">
					Roles list:<br>
					<select id="roleList" style="width:177px" size="4"><option style="color:rgb(153, 170, 181)">@everyone</option></select><br><br>
					<div id="statusDiv" style="position:absolute;left:calc(12px + 177px);top:0px;">
						Status:<br>
						<select id="statusList" size="4" style="width:52px">
							<option style="color:lime">⚫</option>
							<option style="color:lime">📱</option>
							<option style="color:yellow">🌙</option>
							<option style="color:red">⛔</option>
							<option style="color:gray">⚫</option>
						</select>
					</div>
				</div>
				<button id="ListToUser" style="position: absolute; top: 335px; left: 213px; visibility: hidden; width: 40px;">←</button><br>
				<button id="UserToList" style="position: absolute; top: 386px; left: 213px; visibility: hidden; width: 40px;">→</button>
				<div id="avatarGroup" style="position: absolute; left: 252px; top: 48px; visibility: hidden;text-align:left"  class="label title text">
					Url of avatar : <input type="text" id="avatarUrl" placeholder="Type the avatar of &quot;&quot;">
				</div><br>
				<div id="whManager" style="position: absolute; left: 252px; top: 110px; text-align: left; visibility: hidden;" class="label title text">
					Webhook URL : <input id="whURL" placeholder="Webhook URL"><br>
					Message : <input id="content" placeholder="Message"><br>
					<button id="submitWh">Send message</button>
				</div>
				<script>
					getSharedValue = function(name){
						console.log("Requested cookie:",name)
						if(document.cookie.split(name+"=").length != null) return cookieVar = document.cookie.split(name+"=")[1].split(";")[0] || "";
						else{writeSharedValue(name,null);return getSharedValue(name)}
					}
					writeSharedValue = function(name,value){ document.cookie = name+"="+JSON.stringify(value)+";path=/"}
					
					document.getElementById("closeApp").addEventListener("click", ()=>{
						writeSharedValue("DWMreload",true)
					})
					document.getElementById("saveConfig").addEventListener("click", ()=>{
						var cookie = document.cookie.replaceAll(' DWM','DWM')
						console.log(cookie)
						var output = {};
						cookie.split(/\s*;\s*/).forEach(function(pair) {
						  pair = pair.split(/\s*=\s*/);
						  output[pair[0]] = pair.splice(1).join('=');
						});
						var json = JSON.stringify(output, null, 4);
						downloadURI("data:text/txt,"+json, "DWMconfig.json");
					})
					document.getElementById("loadConfig").addEventListener("click", ()=>{
						document.getElementById("fileUpload").click()
					})
						document.getElementById('fileUpload').addEventListener('change', getFile)

						function getFile(event) {
						  const input = event.target
						  if ('files' in input && input.files.length > 0) {placeFileContent(input.files[0])}
						}

						function placeFileContent(file) {
							readFileContent(file).then(content => {
							contentJSON = JSON.parse(content)
							Object.keys(contentJSON).forEach((key)=>{
								document.cookie = key+"="+contentJSON[key]+";path=/"
							})
							reloadUserList()
						  }).catch(error => console.log(error))
						}

						function readFileContent(file) {
							const reader = new FileReader()
						  return new Promise((resolve, reject) => {
							reader.onload = event => resolve(event.target.result)
							reader.onerror = error => reject(error)
							reader.readAsText(file)
						  })
						}
					
					function downloadURI(uri, name) {
					  var link = document.createElement("a");
					  link.download = name;
					  link.href = uri;
					  document.body.appendChild(link);
					  link.click();
					  document.body.removeChild(link);
					  delete link;
					}
					
					document.getElementById("addUser").addEventListener("click", ()=>{
						if(document.getElementById("username").value!=''){
							keys = JSON.parse(getSharedValue('DWMkey') || "[]")
							rolesList = JSON.parse(getSharedValue('DWMrolesList') || "[]")
							keys.push({
								name:document.getElementById("username").value,
								avatarUrl: "",
								roles: [rolesList.length-1],
								color: "rgb(153, 170, 181)",
								status: 0,
							})
							keys.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
							writeSharedValue("DWMkey",keys)
							document.getElementById("username").value = ""
							reloadUserList()
						}
					});
					document.getElementById("removeUser").addEventListener("click", ()=>{
						index = document.getElementById("profileList").options.selectedIndex
						keys = JSON.parse(getSharedValue('DWMkey') || "[]")
						keys.splice(index,1)
						writeSharedValue("DWMkey",keys)
						reloadUserList()
					});
					
					document.getElementById("profileList").addEventListener("click", ()=>{
						reloadUserRoleDisplay()
						document.getElementById("roleArea").style.visibility = "visible"
						document.getElementById("ListToUser").style.visibility = "visible"
						document.getElementById("UserToList").style.visibility = "visible"
						document.getElementById("avatarGroup").style.visibility = "visible"
						document.getElementById("whManager").style.visibility = "visible"
						setTimeout(()=>{
							document.getElementById("avatarUrl").setAttribute("placeholder","Type the avatar of "+getSharedValue("DWMselected"))
						},5)
						keys = JSON.parse(getSharedValue("DWMkey"))
						let profileList = document.getElementById("profileList")
						document.getElementById("avatarUrl").value = keys[profileList.selectedIndex].avatarUrl
						document.getElementById("statusList").selectedIndex = keys[profileList.selectedIndex].status
						profileList = document.getElementById("profileList")
						writeSharedValue("DWMselected",profileList.options[profileList.selectedIndex].innerText)
					});
					
					document.getElementById("addHimself").addEventListener("click",()=>{
						writeSharedValue("DWMaskingme",true)
						setTimeout(()=>{
							reloadUserList()
						},200)
					})
					
					document.getElementById("avatarUrl").addEventListener("change", ()=>{
						keys = JSON.parse(getSharedValue("DWMkey"))
						let profileList = document.getElementById("profileList")
						keys[profileList.selectedIndex].avatarUrl = document.getElementById("avatarUrl").value
						writeSharedValue("DWMkey",keys)
					})
					
					document.getElementById("ListToUser").addEventListener("click", ()=>{
							let profileList = document.getElementById("profileList")
							let index = document.getElementById("roleList").selectedIndex
							if(index==-1) return
							keys = JSON.parse(getSharedValue("DWMkey"))
							roles = JSON.parse(getSharedValue("DWMrolesList"))
							if(keys[profileList.selectedIndex].roles.indexOf(index)==-1)
							keys[profileList.selectedIndex].roles.push(index)
							keys[profileList.selectedIndex].roles.sort()
							keys[profileList.selectedIndex].color = roles[keys[profileList.selectedIndex].roles[0]].color
							console.log(roles[keys[profileList.selectedIndex].roles[0]].color)
							writeSharedValue("DWMkey",keys)
							reloadUserRoleDisplay()
						});
						
						document.getElementById("statusList").addEventListener("click", ()=>{
							let profileList = document.getElementById("profileList")
							keys = JSON.parse(getSharedValue("DWMkey"))
							keys[profileList.selectedIndex].status = document.getElementById("statusList").selectedIndex
							writeSharedValue("DWMkey",keys)
						})
						
						document.getElementById("UserToList").addEventListener("click", ()=>{
							let profileList = document.getElementById("profileList")
							let index = document.getElementById("roleListOfProfile").selectedIndex
							if(index==-1) return
							if(index==document.getElementById("roleListOfProfile").options.length-1) return
							keys = JSON.parse(getSharedValue("DWMkey"))
							roles = JSON.parse(getSharedValue("DWMrolesList"))
							keys[profileList.selectedIndex].roles.splice(index,1)
							keys[profileList.selectedIndex].color = roles[keys[profileList.selectedIndex].roles[0]].color
							console.log(roles[keys[profileList.selectedIndex].roles[0]].color)
							writeSharedValue("DWMkey",keys)
							reloadUserRoleDisplay()
						});
					
					function reloadUserRoleDisplay(){
						keys = document.getElementById("profileList")
						keysCookie = JSON.parse(getSharedValue("DWMkey"))[keys.selectedIndex]
						roleListOfProfile = "<br>Roles of "+keys.options[keys.selectedIndex].innerText+":<br>"
						roleListOfProfile += '<select multiple id="roleListOfProfile" style="width:177px">'
						var roleList = JSON.parse(getSharedValue('DWMrolesList'));
						keysCookie.roles.forEach((role)=>{
							roleListOfProfile += '<option style="color:'+roleList[role].color+'">'+roleList[role].name+'</option>'
						})
						roleListOfProfile += '</select>'
						selectedUser = document.getElementById("selectedUsername")
						selectedUser.innerHTML = roleListOfProfile
					}
					
					function reloadUserList(){
						document.getElementById("profileList").innerHTML = ""
						keys = JSON.parse(getSharedValue('DWMkey') || "[]")
						// document.getElementById("profileList").size = keys.length
						keys.forEach((key,i)=>{
							document.getElementById("profileList").innerHTML += "<option>"+key.name+"</option>"
						})
					}
					reloadUserList()

					function reloadRolesList(){
							console.log("Reload roles list")
							writeSharedValue("DWMrolesGet",true)
							setTimeout(()=>{
								roleList = JSON.parse(getSharedValue("DWMrolesList"))
								roleListElem = document.getElementById("roleList")
								roleListElem.innerHTML = ""
								roleList.forEach((role)=>{
									roleListElem.innerHTML += "<option style='color:"+role.color+"'>"+role.name+"</option>"
								},200)
								keys = JSON.parse(getSharedValue('DWMkey'))
								keys.forEach((key)=>{
									key.roles.pop()
									key.roles.push(roleList.length-1)
								})
								writeSharedValue("DWMkey",keys)
							})
					}
					reloadRolesList()
					document.getElementById("myButton").addEventListener("click",reloadRolesList);
					
					if(roleListInterval) clearInterval(roleListInterval)
					var roleListInterval = setInterval(()=>{
						writeSharedValue("DWMtyping",document.getElementById("content").value!="")
					},100)

					document.getElementById("whURL").value = getSharedValue("DWMwebhookURL").split('"')[1]
					document.getElementById("whURL").addEventListener("change",()=>{
						writeSharedValue('DWMwebhookURL',document.getElementById("whURL").value)
					})
					document.getElementById("submitWh").addEventListener("click", sendMessage);
					document.getElementById("content").addEventListener("keypress", (e)=>{
						if(e.key=="Enter") sendMessage()
					});
					document.getElementById("content").addEventListener("keydown", (e)=>{
						// setTimeout(()=>{
							profileList = document.getElementById("profileList")
							console.log(profileList.selectedIndex)
							if(e.key=="ArrowUp" && profileList.selectedIndex>=1) {event.preventDefault();profileList.selectedIndex = parseInt(profileList.selectedIndex) - 1;profileList.click()}
							else if(e.key=="ArrowDown" && profileList.selectedIndex<=profileList.options.length-2) {event.preventDefault();profileList.selectedIndex = parseInt(profileList.selectedIndex) + 1;profileList.click()}							
						// },200)
					});
					async function sendMessage(){
					  index = document.getElementById("profileList").selectedIndex
					  // console.log(index)
					  profile = JSON.parse(getSharedValue("DWMkey"))[index]
					  // console.log(profile)
					  console.log("Name:",profile.name)
					  console.log("Avatar:",profile.avatarUrl)
					  console.log("WH:",document.getElementById("whURL").value)
					  console.log("Message:",document.getElementById("content").value)
					  const rawResponse = await fetch(document.getElementById("whURL").value, {
						method: 'POST',
						headers: {
						  'Accept': 'application/json',
						  'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							username: profile.name,
							avatar_url: profile.avatarUrl,
							content: document.getElementById("content").value
						})
					  });
					  document.getElementById("content").value = ''
					  // const content = await rawResponse.json();
					  // console.log(content);
					}
				</script>
			</body>
		</html>
	 `);
}

if(window.intervalDWM) clearInterval(window.intervalDWM)
window.intervalDWM = setInterval(() => {
	var all = document.getElementsByClassName("desaturateUserColors-1gar-1");
	var profiles = JSON.parse(getSharedValue("DWMkey"))

	if(document.getElementsByTagName("aside").length!=0)
	{
		var memberList = document.getElementsByTagName("aside")[0].firstChild.firstChild
		var keys = JSON.parse(getSharedValue("DWMkey"))
		votes = {}
		keys.forEach((key,i)=>{
			if(key.status==4) return
			if(!votes[key.roles[0]]) votes[key.roles[0]] = []
			votes[key.roles[0]].push(i)
		})
		memberList.innerHTML = ""
		roles = JSON.parse(getSharedValue("DWMrolesList"))
		Object.keys(votes).forEach(function(role){
			if(keys[votes[role]] && keys[votes[role]].status==4) {return}
			memberList.innerHTML += createLabelObject(roles[role].name=="@everyone"?"Online":roles[role].name,votes[role].length)
			votes[role].forEach((id)=>{
				memberList.innerHTML += createAvatarObject(keys[id].name,getAvatarUrl(keys[id].avatarUrl),statusListMap[keys[id].status])
			})			
		})
		offlineProfiles = []
		keys.forEach((key)=>{
			if(key.status==4) offlineProfiles.push(key)
		})
		if(offlineProfiles.length!=0)
			memberList.innerHTML += createLabelObject("Offline",offlineProfiles.length)
		offlineProfiles.forEach((profile)=>{
			memberList.innerHTML += createAvatarObject(profile.name,getAvatarUrl(profile.avatarUrl),statusListMap[profile.status])
		})
	}
	if(getSharedValue("DWMrolesGet")=="true"){
		console.log("Asking roles")
		var roleList = document.querySelector("#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div:nth-child(2) > div > div > div.contentRegion-3nDuYy > div > div > main > div > div.sidebar-dLM-kh > div > div.list-I3aHXn.thin-1ybCId.scrollerBase-289Jih > div.side-8zPYf6")
		if(roleList!=null){
			var DWMrolesList = new Array();
			[...roleList.children].forEach((roleElem,i)=>{
				DWMrolesList.push({
					name:roleElem.children[1].innerHTML,
					color:roleElem.firstChild.style.backgroundColor
				})
			})
			writeSharedValue("DWMrolesList",DWMrolesList)
		}
		// else alert("Please go to role permissions modifier UI.")
		writeSharedValue("DWMrolesGet",false)
	}
	profiles.forEach((profile,j)=>{
		[...all].forEach((roleElem,i)=>{
			if(all[i].innerText==profile.name) all[i].style.color = profile.color
		})
	})

	window.WritingForm = document.querySelector("#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div > div.chat-3bRxxu > div.content-yTz4x3 > main > form")
	if(getSharedValue("DWMtyping")=="true" && !window.WritingForm.children[1])
	window.WritingForm.innerHTML += getTypingObject(getSharedValue("DWMselected").split("\"")[1])
	if(window.WritingForm && window.WritingForm.children[1] && getSharedValue("DWMtyping")=="false")
	window.WritingForm.children[1].remove()
	if(getSharedValue("DWMreload")=="true")
	{
		popupWindow.close()
		location.reload()
		writeSharedValue("DWMreload",false)
	}
	if(getSharedValue("DWMaskingme")=="true")
	{
		let profile = document.querySelector("#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div > div.sidebar-2K8pFh > section > div.container-3baos1")
		let name = profile.querySelector("div.nameTag-3uD-yy.canCopy-2VBT7N > div.colorStandard-2KCXvj.size14-e6ZScH.usernameContainer-1fp4nu > div").innerText
		let avatarUrl = profile.querySelector("div.avatarWrapper-2yR4wp > div > svg > foreignObject > div > img").src
		let statusName = profile.querySelector("div.avatarWrapper-2yR4wp > div > svg > rect").getAttribute("mask").split("status-")[1].split(")")[0]
		// console.log(statusName)
		let status = statusListMap.indexOf(statusName)
		let rolesList = JSON.parse(getSharedValue("DWMrolesList"))
		keys = JSON.parse(getSharedValue("DWMkey"))
		keys.push({
			name,
			avatarUrl,
			roles: [rolesList.length-1],
			color: "rgb(153, 170, 181)",
			status,
		})
		writeSharedValue("DWMaskingme",false)
		keys.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
		writeSharedValue("DWMkey",keys)
	}
},100)

window.statusListMap = [
	"online",
	"mobile",
	"idle",
	"dnd",
	"offline"
]

//Open UI
if (location.host.indexOf("discord.com") != -1 && location.href.indexOf("channels") != -1) {
	console.log("Open UI of extension !");
	openPopup();
}
else if (location.host.indexOf("discord.com") != -1 && location.href.indexOf("channels") == -1 ) {
	alert('Sorry, but this extension works only when you\'re logged in.');
}
else alert('Sorry, but this extension works only on discord.com');