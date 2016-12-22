(function() {
	var events = [
		{
			"id": "edusummit",
			"name": "edu summit",
			"time": "28–29 Feb",
			"img": "education.png",
			"summary": "Design educators and practitioners discuss the advancement of IxD practice.",
			"url": "edusummit.ixda.org"
		},
		{
			"id": "interaction16",
			"name": "interaction 16",
			"time": "1–4 Mar",
			"img": "interaction16.png",
			"summary": "IxDA’s annual conference for professionals and students across 1 workshop day and 3 days of lectures.",
			"url": "interaction16.ixda.org"
		},
		{
			"id": "awards",
			"name": "ixd awards",
			"time": "4 Mar",
			"img": "awards.png",
			"summary": "IxDA’s annual interaction design awards celebrate design thought leadership and innovation.",
			"url": "awards.ixda.org"
		},
		{
			"id": "sdc",
			"name": "student design challenge",
			"time": "4 Mar",
			"img": "sdc.png",
			"summary": "A challenge open to graduates and undergraduates addressing culture’s unmet and untapped opportunities.",
			"url": "sdc.ixda.org"
		}
	];

	// Add styles
	var styles = document.createElement('link');
	styles.rel = 'stylesheet';
	styles.href = 'http://interaction16.ixda.org/wp-content/themes/interaction16/assets/ixd-week/ixd-week.css';
	document.getElementsByTagName('head')[0].appendChild(styles);

	// Create the Interaction Week Header
	var eventsDocFrag = document.createDocumentFragment();
	var ixd_header = document.createElement('div');
	ixd_header.id = 'ixd-week';
	ixd_header.className = 'cleanslate';
	ixd_header.innerHTML = '<div id="ixd-week-header"><div class="ixd-week-container"><a class="ixd-week-toggle" href="#"><p class="title">interaction week</p></a><a class="ixd-week-toggle toggle" href="#"><p><span>see what’s on</span><i id="ixd-chevron" class="chevron down"></i></p></a></div></div>';

	var ixd_inner = document.createElement('div');
	ixd_inner.id = 'ixd-week-inner';
	var ixd_events = document.createElement('div');
	ixd_events.className = 'ixd-week-container';

	var hostname = location.hostname;
	for (var i = 0; i < events.length; i++) {
		var hevent = document.createElement('div');
		hevent.className = hostname.indexOf(events[i].id) ? 'h-event' : 'h-event active';
		hevent.innerHTML = 	'<a href="http://' + events[i].url + '">' +
							'<p class="p-name">' + events[i].name + '</p>' +
							'<time>' + events[i].time + '</time>' +
							'<img src="http://interaction16.ixda.org/wp-content/themes/interaction16/assets/ixd-week/' + events[i].img + '">' +
							'<p class="p-summary">' + events[i].summary + '</p>' +
							'<p class="p-url">' + events[i].url + '</p>' +
							'</a>';
		ixd_events.appendChild(hevent);
	}
	ixd_inner.appendChild(ixd_events);
	ixd_header.appendChild(ixd_inner);
	eventsDocFrag.appendChild(ixd_header);
	document.body.appendChild(eventsDocFrag);

	// Toggle
	function toggleIxdWeek(e) {
		e.preventDefault();
		toggleClass(ixd_header, 'active');
		toggleClass(document.getElementById('ixd-chevron'), 'down');
	}
	var toggle = document.getElementsByClassName('ixd-week-toggle');
	for (var j = toggle.length - 1; j >= 0; j--) {
		toggle[j].addEventListener('click', toggleIxdWeek, false);
	}

	function toggleClass(element, tClass) {
		tClass = tClass.replace(/\s/g, '');
		var classes =  element.className;
		element.className = classes.indexOf(tClass) !== -1 ? classes.replace(' ' + tClass, '') : classes + ' ' + tClass;
	}
}());
