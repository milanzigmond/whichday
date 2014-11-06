// Days = new Mongo.Collection('days');

// if (Meteor.isClient) {
	
// 	Meteor.startup( function () {
// 		Accounts.ui.config({
// 			passwordSignupFields: 'USERNAME_ONLY'
// 		});
// 	});

// 	Template.choose.helpers({
// 		days: function () {
// 			// return Session.get('days');
// 			return Days.find({});
// 			// return Days.find({}, {sort: {userIds: -1}});
// 		}
// 	});	

// 	Template.day.helpers({
// 		style: function () {
// 			return this.name.toLowerCase();
// 		},
// 		userCount: function () {
// 			return this.userIds.length;
// 		},
// 		usernameFor: function (id) {
// 			if(Meteor.users.find().count() === 0) return;
// 			return Meteor.users.findOne({_id:id}).username;
// 		}
// 	});

// 	Template.day.events({
// 		'click': function (event, template) {
// 			event.preventDefault();

// 			var userid = Meteor.userId();
// 			if(!userid) {
// 				alert('Login to vote');
// 				return;
// 			}

// 			Meteor.call('changeDay', this._id, userid);
// 		}
// 	});

// 	Template.day.created = function () {
// 		updateOpacity(this);
// 	};
// };

// if(Meteor.isServer) {

// 	Meteor.methods({
// 	    changeDay: function ( dayId, userId ) {

// 	    	var currentUserIds = Days.findOne({_id:dayId}).userIds;
// 	    	var currentlySelectedDay = Days.findOne({userIds: {$in: [userId]}});

// 	    	console.log(currentlySelectedDay);

// 	        if(currentUserIds.indexOf(userId) === -1) {
// 				Days.update({_id:dayId}, {$push: {userIds: userId}});
// 				Days.update({_id:currentlySelectedDay._id}, {$pull: {userIds: userId}});
// 				// Days.update({_id: {$ne: dayId}}, {$pull: {userIds: userId}});
// 			} else {
// 				Days.update({_id:dayId}, {$pull: {userIds: userId}});
// 			}
// 	    }
// 	});

// 	Meteor.startup(function () {		
// 		var days = [
// 						'Monday', 
// 						'Tuesday',
// 						'Wednesday',
// 						'Thursday',
// 						'Friday',
// 						'Saturday',
// 						'Sunday'
// 					];

// 		if (Days.find().count() === 0) {
// 			_.each(days, function (day){
// 				Days.insert({name:day, userIds:[]});
// 			});
// 		};
// 	});
// }