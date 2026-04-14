jQuery(document).ready(function(){
	jQuery("#add-event").submit(function(){
		alert("Submitted");
		var values = {};
		$.each($('#add-event').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});
		console.log(
			values
		);
	});
});

(function () {
	'use strict';
	// ------------------------------------------------------- //
	// Calendar
	// ------------------------------------------------------ //
	jQuery(function() {
		// page is ready
		jQuery('#calendar').fullCalendar({
			themeSystem: 'bootstrap4',
			// emphasizes business hours
			businessHours: false,
			defaultView: 'month',
			// event dragging & resizing
			editable: true,
			// header
			header: {
				left: 'title',
				center: 'month,agendaWeek,agendaDay',
				right: 'today prev,next'
			},
			events: [
			{
				title: 'Identifikasi Kegiatan Sektoral',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2025-02-27',
				end: '2025-02-27',
				className: 'fc-bg-default',
				icon : "circle"
			},
			{
				title: 'Kegiatan Prioritas Pembinaan',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2025-03-10',
				end: '2025-03-10',
				className: 'fc-bg-deepskyblue',
				icon : "cog",
				allDay: true
			},
			{
				title: 'Pembinaan Satu Data',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2025-05-05',
				end: '2025-05-05',
				className: 'fc-bg-deepskyblue',
				icon : "cog",
				allDay: true
			},
			{
				title: 'Pembinaan Kualitas Data',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2025-05-26',
				end: '2025-05-26',
				className: 'fc-bg-deepskyblue',
				icon : "cog",
				allDay: true
			},
			{
				title: 'Pembinaan Proses Bisnis Statistik',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2025-06-25',
				end: '2025-06-25',
				className: 'fc-bg-deepskyblue',
				icon : "cog",
				allDay: true
			},
			{
				title: 'Pembinaan Kelembagaan dan SNN',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2025-07-29',
				end: '2025-07-29',
				className: 'fc-bg-deepskyblue',
				icon : "cog",
				allDay: true
			},
			{
				title: 'Pembinaan Metadata Statistik',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2025-09-02',
				end: '2025-09-02',
				className: 'fc-bg-deepskyblue',
				icon : "cog",
				allDay: true
			},
			{
				title: 'Knowledge Sharing : Disemininasi Statistik',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
				start: '2025-10-09',
				end: '2025-10-09',
				className: 'fc-bg-deepskyblue',
				icon : "cog",
				allDay: true
			
			}
			
			],
			dayClick: function() {
				jQuery('#modal-view-event-add').modal();
			},
			eventClick: function(event, jsEvent, view) {
				jQuery('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
				jQuery('.event-title').html(event.title);
				jQuery('.event-body').html(event.description);
				jQuery('.eventUrl').attr('href',event.url);
				jQuery('#modal-view-event').modal();
			},
		})
});

})(jQuery);