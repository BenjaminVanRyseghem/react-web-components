#!/bin/sh

set -e

curl --version

echo "------------------ Update P&L widget --------------------"

curl -X 'PUT' \
  'https://widgetgames.azurewebsites.net/applications/448c2171-abaa-4608-ab89-2e3047e6b5c3/widgets/71c6161f-d93e-44bd-a41e-33d34c633904' \
  --dump-header - --fail-with-body --silent --show-error \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "71c6161f-d93e-44bd-a41e-33d34c633904",
  "name": "P&L Summary",
  "description": "A widget that shows a summary of the P&L (i.e., Profit & Loss) information on the overview page of finsit.",
  "icon": "wk-icon-graph",
  "customActionLabel": null,
  "widget": {
    "tagName": "finsit-profit-and-loss",
    "modulePath": null,
    "es5Path": "https://foretagsplatsen.github.io/widgethon/bundle.js"
  },
  "widgetExpanded": {
    "tagName": "finsit-profit-and-loss-expanded",
    "modulePath": null,
    "es5Path": "https://foretagsplatsen.github.io/widgethon/bundle.js"
  },
  "widgetCustomAction": null
}'

echo "------------------ Update Company widget --------------------"
curl -X 'PUT' \
  'https://widgetgames.azurewebsites.net/applications/448c2171-abaa-4608-ab89-2e3047e6b5c3/widgets/d13c6175-756d-4426-be56-e2fd0098567d' \
  --dump-header - --fail-with-body --silent --show-error \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "d13c6175-756d-4426-be56-e2fd0098567d",
  "name": "The Company Summary",
  "description": "A widget that shows a summary of the balance sheet information on the overview page of finsit.",
  "icon": "wk-icon-pie",
  "customActionLabel": null,
  "widget": {
    "tagName": "finsit-company",
    "modulePath": null,
    "es5Path": "https://foretagsplatsen.github.io/widgethon/bundle.js"
  },
  "widgetExpanded": {
    "tagName": "finsit-company-expanded",
    "modulePath": null,
    "es5Path": "https://foretagsplatsen.github.io/widgethon/bundle.js"
  },
  "widgetCustomAction": null
}'

echo "------------------ Update Period Reports widget --------------------"
curl -X 'PUT' \
  'https://widgetgames.azurewebsites.net/applications/448c2171-abaa-4608-ab89-2e3047e6b5c3/widgets/ce5d42e5-4478-4bdb-8fe3-9e317157271f' \
  --dump-header - --fail-with-body --silent --show-error \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "ce5d42e5-4478-4bdb-8fe3-9e317157271f",
  "name": "Latest period reports",
  "description": "A widget that shows a list of the latest period reports, with the new (unseen) ones being marked/highlighted.",
  "icon": "wk-icon-document-signed",
  "customActionLabel": null,
  "widget": {
    "tagName": "finsit-period-reports",
    "modulePath": null,
    "es5Path": "https://foretagsplatsen.github.io/widgethon/bundle.js"
  },
  "widgetExpanded": {
    "tagName": "finsit-period-reports-expanded",
    "modulePath": null,
    "es5Path": "https://foretagsplatsen.github.io/widgethon/bundle.js"
  },
  "widgetCustomAction": null
}'
