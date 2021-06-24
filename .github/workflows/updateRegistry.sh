#!/bin/sh

curl -X PUT \
	 'https://widgetgames.azurewebsites.net/applications/448c2171-abaa-4608-ab89-2e3047e6b5c3/widgets/71c6161f-d93e-44bd-a41e-33d34c633904' \
	 --compressed \
	 -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0' \
	 -H 'Accept: */*' \
	 -H 'Accept-Language: en-US,en;q=0.5' \
	 -H 'Referer: https://widgetgames.azurewebsites.net/swagger/index.html' \
	 -H 'Content-Type: application/json' \
	 -H 'Origin: https://widgetgames.azurewebsites.net' \
	 -H 'DNT: 1' \
	 -H 'Connection: keep-alive' \
	 -H 'Cookie: ARRAffinity=4a6bcf805311a2b473ad4cc81aaf102012766d358e9d9ece2fd92ef8a4d85836; ARRAffinitySameSite=4a6bcf805311a2b473ad4cc81aaf102012766d358e9d9ece2fd92ef8a4d85836' \
	 -H 'Sec-GPC: 1' \
	 -H 'Pragma: no-cache' \
	 -H 'Cache-Control: no-cache' \
	 --data-raw $'{\n  "id": "71c6161f-d93e-44bd-a41e-33d34c633904",\n  "name": "P&L Summary",\n  "description": "A widget that shows a summary of the P&L (i.e., Profit & Loss) information on the overview page of finsit.",\n  "icon": "wk-icon-graph",\n  "customActionLabel": null,\n  "widget": {\n    "tagName": "finsit-profit-and-loss",\n    "modulePath": null,\n    "es5Path": "https://foretagsplatsen.github.io/widgethon/bundle.js"\n  },\n  "widgetExpanded": null,\n  "widgetCustomAction": null\n}'

curl -X PUT \
	'https://widgetgames.azurewebsites.net/applications/448c2171-abaa-4608-ab89-2e3047e6b5c3/widgets/d13c6175-756d-4426-be56-e2fd0098567d' \
	--compressed \
	-H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0' \
	-H 'Accept: */*' \
	-H 'Accept-Language: en-US,en;q=0.7,fr;q=0.3' \
	-H 'Referer: https://widgetgames.azurewebsites.net/swagger/index.html' \
	-H 'Content-Type: application/json' \
	-H 'Origin: https://widgetgames.azurewebsites.net' \
	-H 'DNT: 1' \
	-H 'Connection: keep-alive' \
	-H 'Cookie: ARRAffinity=4a6bcf805311a2b473ad4cc81aaf102012766d358e9d9ece2fd92ef8a4d85836; ARRAffinitySameSite=4a6bcf805311a2b473ad4cc81aaf102012766d358e9d9ece2fd92ef8a4d85836' \
	-H 'Sec-GPC: 1' \
	-H 'Pragma: no-cache' \
	-H 'Cache-Control: no-cache' \
	--data-raw $'{\n  "id": "d13c6175-756d-4426-be56-e2fd0098567d",\n  "name": "The Company Summary",\n  "description": "A widget that shows a summary of the balance sheet information on the overview page of finsit.",\n  "icon": "wk-icon-pie",\n  "customActionLabel": null,\n  "widget": {\n    "tagName": "finsit-company",\n    "modulePath": null,\n    "es5Path": "https://foretagsplatsen.github.io/widgethon/bundle.js"\n  },\n  "widgetExpanded": null,\n  "widgetCustomAction": null\n}'
