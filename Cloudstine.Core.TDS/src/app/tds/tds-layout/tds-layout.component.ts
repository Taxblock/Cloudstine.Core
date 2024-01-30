import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationSettings } from 'src/app/core/models/configuration';
import { IdentityUser } from 'src/app/core/models/identty-user.model';
import { ResponseCode } from 'src/app/core/models/responseObject.model';
import { RoleDetails } from 'src/app/core/models/role-Details';
import { AlertService } from 'src/app/core/services/alertService';
import { CoreMenuService } from 'src/app/core/services/core-menu.service';
import { MessageService } from 'src/app/core/services/message.service';
import { UserProfileService } from 'src/app/core/services/user-profile.service';
import { CommunicationType } from 'src/app/shared/Models/communication-type.model';
import { MessageSendModel } from 'src/app/shared/Models/message-send.model';
import { UserCommunicationMappingModel } from 'src/app/shared/Models/user-communication-mapping.model';
import { CommunicationService } from 'src/app/shared/services/communication.service';
//import { AuthService } from '../component/authentication/login/authService';
import { TDSLayoutService } from './tds-layout.service';
//import { PANAadharLinkVerificationService } from '../component/employee/panaadhar-link-verification/panaadhar-link-verification.service';


@Component({
  selector: 'tds-layout',
  templateUrl: './tds-layout.component.html',
  styleUrls: ['./tds-layout.component.scss'],

})
export class TDSLayoutComponent implements OnInit {
  isOpenMessagePopup: boolean;
  readMessage: boolean = false;
  isSidebar: boolean = false;
  UserRole: string;
  UserName: string;
  public RollName: any;
  public currentUser: IdentityUser;
  RoleList: Array<any> = [];
  RoleId: number = 0;
  layoutDetails: any
  UserRoleID: number;
  Menu: any;
  hideSidebar: boolean = false;
  closeid: string = '';
  closeMenu: boolean = false;
  test2: string;
  isSecondClick: boolean = true;
  public notificationData: Array<any> = [];
  public isNotificationPresent: boolean = false;
  messageBy: string;
  messageByDate: Date;
  modalTitle: string;
  modalDetailedInfo: string;
  panAadhaarLink: boolean = false;
  readChatMessage: boolean = false
  ToUserListOfMessage: any;
  selectedUser: any;
  data1 = 1212;
  messageSendModel = new MessageSendModel();
  MessageList: any;
  ToAllExpertAssistantsAdminList: any;
  adminListView: boolean = false;
  adminMessage: boolean = false;
  gotoHomeList: boolean = true
  GetMessageOfCount: any;
  EmpId: string;
  companyLogoUrl: string;
  companyMobileLogoUrl: string;
  CycleTypeId: any;
  hideLeftContent: boolean = false;
  searchText: string = '';
  filteredUserList: any;
  filteredUserList2: any;
  totalMessageCount: number = 0;
  MessageSendButton: boolean = false;
  searchText1: any;
  searchText2: any;
  employeeTypeDetailsId : any;
  IsVerify: boolean = false;
  isDisabledForVerifyPending: boolean = false;
  isPanAadharVerificationRequired:number = 0;
  messagee: string = '';
  /**
  * Constructor
  *
  * @param {CoreMenuService} _coreMenuService
  */

  constructor(
    private eRef: ElementRef,
    private _coreMenuService: CoreMenuService,
    private _userProfileService: UserProfileService,
   // private pANAadharLinkVerificationService: PANAadharLinkVerificationService,
    private poiLayoutService: TDSLayoutService,
    //private _authService: AuthService,
    private messageService: MessageService,

    private router: Router,
    //private pOILayoutService: POILayoutService,
    private alertService: AlertService,
    private communicationService: CommunicationService,

  ) {

    let companyUrl = localStorage.getItem('CompanyName')
    this.companyLogoUrl = `assets/images/taxblock/companyLogo/${companyUrl}.png`;
    this.companyMobileLogoUrl = `assets/images/taxblock/companyLogo/${companyUrl}_m.png`;


    // this._coreMenuService.onMenuRegistered.subscribe(res => {
    //    this.Menu = res[1];
    // })
    this.CheckAadharPanStatus();
    let data = ConfigurationSettings.getMenu();
    this.Menu = data

    this.poiLayoutService.currentLayoutDetails.subscribe(res => {
      this.layoutDetails = res;
    })

    // this.poiLayoutService.panAadhaarLinkStatus.subscribe(res => {
    //   this.panAadhaarLink = res;
    // })



    // document.addEventListener("DOMContentLoaded", function (event) {

    //   const showNavbar = (toggleId, navId, bodyId, headerId) => {
    //     const toggle = document.getElementById(toggleId),
    //       nav = document.getElementById(navId),
    //       bodypd = document.getElementById(bodyId),
    //       headerpd = document.getElementById(headerId)

    //     // Validate that all variables exist
    //     if (toggle && nav && bodypd && headerpd) {
    //       toggle.addEventListener('click', () => {
    //         // show navbar
    //         nav.classList.toggle('show')
    //         // change icon
    //         toggle.classList.toggle('bx-x')
    //         // add padding to body
    //         bodypd.classList.toggle('body-pd')
    //         // add padding to header
    //         headerpd.classList.toggle('body-pd')
    //       })
    //     }
    //   }



    //   showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    //   /*===== LINK ACTIVE =====*/
    //   const linkColor = document.querySelectorAll('.nav_link')

    //   function colorLink() {
    //     if (linkColor) {
    //       linkColor.forEach(l => l.classList.remove('active'))
    //       this.classList.add('active')
    //     }
    //   }
    //   linkColor.forEach(l => l.addEventListener('click', colorLink))

    //   // Your code to run since DOM is loaded and ready
    // });
  }



  ngOnInit() {
    // this.CycleTypeId = ConfigurationSettings.getInvestmentCycleTypeId();
    // this.GetAllContent()
    // this.UserRole = ConfigurationSettings.getUserRole();
    // this.EmpId = ConfigurationSettings.getUserName();
    // this.UserName = ConfigurationSettings.getFullName();
    // this.employeeTypeDetailsId = ConfigurationSettings.getEmployeeTypeDetailsId();

    // this.UserRoleID = ConfigurationSettings.getUserRoleId();
    // this.GetUserListForMessage();
    // if (this.UserRoleID == undefined) {
    //   this.router.navigateByUrl('/test/login')
    // }
    // this.getUserNotificationList();


  }
  sendButtonDisabled(e: any) {
    e = e.trim()
    if (e !== '') {
      this.MessageSendButton = true;
    } else {
      this.MessageSendButton = false;
    }

  }
  hideShowLeftContent() {
    this.hideLeftContent = !this.hideLeftContent
  }

  showAllMessages() {
    this.GetUserListForMessage();
    this.getUserNotificationList();
    this.readChatMessage = false
    this.adminListView = false
    document.getElementById('messagePopup').click()
  }

  onNotificationClick(){
    this.readMessage = false
  }

  getUserNotificationList() {
    this.communicationService
      .getUserCommunicationDetails(false, CommunicationType.InAppNotification)
      .subscribe(
        (result: any) => {
          this.notificationData = result.Value;
          this.isNotificationPresent = false;
          this.notificationData.forEach(element => {
            if (!element.isRead) {
              this.isNotificationPresent = true;
              return false;
            }
          });
          // if (
          //   this.notificationData == null ||
          //   this.notificationData.length == 0
          // ) {
          //   this.notificationData = [];
          //   this.notificationData[0] = { body: "No Notification" };
          //   this.isNotificationPresent = false;
          // } else {
          //   this.isNotificationPresent = true;
          // }
        },
        (error: any) => { }
      );
  }

  onClickSubMenu() {
    let data = document.getElementsByClassName('modal-backdrop')[0].addEventListener('click', function (e) {

    })

    document.getElementById('CloseOnSubMenuClick').click();

    // document.getElementById(this.closeid).click()
    // this.closeMenu = false
    // this.isSecondClick=true
  }

  onClickSingalMenu() {
    localStorage.removeItem('ViewComputationMode')
    document.getElementById('CloseOnSubMenuClick').click();
    // document.getElementById(this.closeid).click()

    this.closeMenu = false
    this.isSecondClick = true
    document.getElementById(this.closeid).click()
  }



  onClickMenu(e: any) {

    let id = '0' + e

    let data = document.getElementById(id).getAttribute('aria-expanded')
    if ((data == 'false' && !this.closeMenu && this.isSecondClick) || this.closeid == '') {
      this.closeid = id
      this.closeMenu = true

    } else if (data == 'false') {
      this.test2 = '0' + e
      this.isSecondClick = false
      document.getElementById(this.closeid).click()

    } else if (!this.isSecondClick) {
      if (this.closeid == this.test2) {
        this.closeid = ''
      } else {
        this.closeid = this.test2
      }
      this.closeMenu = false
      this.isSecondClick = false

    }
    //  if(this.closeMenu){

    //  }
  }


  status: boolean = false;
  //Sidebar opne
  clickEvent() {
    this.status = true;
  }
  //Sidebar close
  clickEvent2() {
    this.status = false;
  }

  // onClick() {

  //   this.isSidebar = !this.isSidebar;
  // }

  onRoleChange() {
    let currentUserValue = this._userProfileService.CurrentUserValue;
    currentUserValue.CurrentRoleId = 1;
    // this.RollName = currentUserValue.Roles[this.RoleId].Name;
    this.SetRoleMenu(currentUserValue.roles.filter(f => f.roleId == 1)[0]);

    this._userProfileService.SetUserData(currentUserValue);
  }
  SetRoleMenu(roleDetails: RoleDetails) {
    // Set the main menu as our current menu
    //this.RollName = roleDetails.name;
    this._coreMenuService.setCurrentMenu(roleDetails.name);

  }

  Logout() {

    // this._authService.setSession(data);
    let data = localStorage.getItem('CompanyName')
    localStorage.clear();
    this.currentUser = null;
    this.router.navigateByUrl('/' + data + '/login')
  }

  GetAllContent() {
    let companyFinancialId = ConfigurationSettings.getCompanyFinancialId();
    let isFrom = 'poi-layout';
    try {
      this.poiLayoutService.GetAllContent(companyFinancialId, isFrom).subscribe(
        (result: any) => {
          let data = result
          this.poiLayoutService.setAllContentData(data);
        },
        (error: any) => {
          if (error && error.error) {
            this.alertService.ShowErrorMessage(error.error);
          }
        }
      );
    } catch (e) {
      console.log(e);
      this.alertService.ShowErrorMessage("Fail to load House Property data ");
    }
  }

  onClickReadMessage(selectedMsgData: any) {
    if (selectedMsgData.subject) {
      this.modalTitle = selectedMsgData.subject;
    }
    else {
      this.modalTitle = selectedMsgData.body;
    }
    this.messageBy = selectedMsgData.notificationFrom;
    this.messageByDate = selectedMsgData.createdDate;

    this.modalDetailedInfo = selectedMsgData.body;
    this.readMessage = true;

    this.updateNotificationStatus(selectedMsgData);
  }

  updateNotificationStatus(selectedMsgData: any) {
    let userCommunicationMappingViewModel: UserCommunicationMappingModel =
      new UserCommunicationMappingModel();
    userCommunicationMappingViewModel.communicationId = selectedMsgData.communicationId;
    userCommunicationMappingViewModel.userCommunicationId =
      selectedMsgData.userCommunicationId;
    userCommunicationMappingViewModel.updatedBy =
      ConfigurationSettings.getUserFinancialId();
    userCommunicationMappingViewModel.updatedDate = new Date();
    userCommunicationMappingViewModel.isRead = true;

    this.communicationService
      .updateUserCommunicationDetails(userCommunicationMappingViewModel)
      .subscribe(
        (result: any) => {
          this.getUserNotificationList();
        },
        (error: any) => { }
      );
  }

  onClickBackToNotification() {
    this.readMessage = false
  }


  //send message

  GetUserListForMessage() {

    return this.poiLayoutService.GetUserListForMessage().subscribe(
      result => {
        this.totalMessageCount = 0
        this.ToUserListOfMessage = result.Value;
        this.ToUserListOfMessage.forEach(element => {
          this.totalMessageCount += element.messageCount;
        });
      },
      (error: any) => {
        //this.alertService.ShowErrorMessage(error.error);
      }
    )
  }



  onClickPlusBtn() {
    this.gotoHomeList = true
    this.adminListView = true
    // this.adminMessage = false
    this.GetAllAdvisorList()
  }
  GetAllAdvisorList() {
    return this.poiLayoutService.GetAllAdvisorList().subscribe(
      result => {
        this.ToAllExpertAssistantsAdminList = result.Value;
      },
      (error: any) => {
        //this.alertService.ShowErrorMessage(error.error);
      }
    )
  }
  onClickUserForMessage(toUserList, i) {
    this.selectedUser = toUserList
    this.messageSendModel.toUserFinancialId = toUserList.fromUserFinancialId;
    this.messageSendModel.toCompanyFinancialId = toUserList.fromCompanyFinancialId;
    this.messageSendModel.chat = '';
    this.readChatMessage = true;
    this.adminListView = false;
    // if (toUserList.messageCount > 0) {
    //   this.messageSendModel.isCount = true
    // }
    // else {
    //   this.messageSendModel.isCount = false
    // }
    if (i == 1) {
      this.gotoHomeList = true
    } else {
      this.gotoHomeList = false
    }

    // this.adminMessage = true
    this.GetAllMessage()

  }
  onClickBackToMessageHome(gotohome) {
    if (gotohome) {
      this.readChatMessage = false
      this.adminListView = false
    } else {
      this.adminListView = true
      this.readChatMessage = false
      this.gotoHomeList = true
    }
    this.GetUserListForMessage();
  }

  onSendMessageClick() {
    this.messageSendModel.fromUserFinancialId = ConfigurationSettings.getUserFinancialId()
    this.messageSendModel.fromCompanyFinancialId = ConfigurationSettings.getCompanyFinancialId()
    this.messageSendModel.isRead = false;
    this.messageSendModel.isCount = true;
    this.messageSendModel.roleId = ConfigurationSettings.getUserRoleId()
    this.messageSendModel.chat = this.messageSendModel.chat.trim()
    if (this.messageSendModel.chat != '') {
      return this.poiLayoutService.onSendMessageClick(this.messageSendModel).subscribe(
        result => {
          let serviceResponse = result.Value;
          if (serviceResponse == ResponseCode.Success) {
            this.GetAllMessage()
            this.messageSendModel.chat = ''
            this.alertService.ShowSuccessMessage('Message Sent');

            this.GetUserListForMessage()
          }
          else {
            this.alertService.ShowErrorMessage(this.messageService.serviceError);

          }
        }
      )

    } else {
      this.alertService.ShowErrorMessage('Please Enter a message')
    }
  }

  GetAllMessage() {
    let toUserFinancialId = this.messageSendModel.toUserFinancialId
    let toCompanyFinancialId = this.messageSendModel.toCompanyFinancialId
    let fromUserFinancialId = ConfigurationSettings.getUserFinancialId()
    let fromCompanyFinancialId = ConfigurationSettings.getCompanyFinancialId()
    let roleId = ConfigurationSettings.getUserRoleId();
    this.poiLayoutService.GetAllMessage(toCompanyFinancialId, toUserFinancialId, fromUserFinancialId, fromCompanyFinancialId, roleId).subscribe(result => {
      this.MessageList = result.Value
      
    })
  }
 
  onSearchInputChange1() {
    const searchTextLowerCase = this.searchText1.toUpperCase();
    this.filteredUserList = this.ToUserListOfMessage.filter(user =>
      user.userName.toString().toUpperCase().includes(searchTextLowerCase) ||
      user.name.toUpperCase().includes(searchTextLowerCase)
    );
  }

  onSearchInputAdminChange2() {
    const searchTextLowerCase = this.searchText2.toUpperCase();
    this.filteredUserList2 = this.ToAllExpertAssistantsAdminList.filter(user =>
      user.userName.toString().toUpperCase().includes(searchTextLowerCase) ||
      user.name.toUpperCase().includes(searchTextLowerCase)
    );

  }

  CheckAadharPanStatus() {
    // this.pANAadharLinkVerificationService.getAadharPanLinkResponse().subscribe(
    //   (result: any) => {
    //     this.isPanAadharVerificationRequired = Number(ConfigurationSettings.getIsPanAadharVerificationRequired());
    //     let response = result.Value;
    //     let string
    //     if (response.message == null) {
    //       string = ''
    //     } else {
    //       string = response.message;
    //     }

    //     const substring1 = "is already linked to given Aadhaar";
    //     const substring2 = "is linked to Aadhaar number";
    //     if (string.includes(substring1)) {
    //       this.IsVerify = true;
    //     } else if (string.includes(substring2)) {
    //       this.IsVerify = true;
    //     } else {
    //       this.IsVerify = false;
    //     }
    //     this.poiLayoutService.setpanAadhaarLinkStatus(true);

    //     if(!this.IsVerify && this.isPanAadharVerificationRequired == 1 && this.UserRoleID == 3){
    //       this.isDisabledForVerifyPending = true;
    //     }else{ 
    //       this.isDisabledForVerifyPending = false;
    //     }



    //   },
    //   (error: any) => {

    //   }
    // );
  }



}

