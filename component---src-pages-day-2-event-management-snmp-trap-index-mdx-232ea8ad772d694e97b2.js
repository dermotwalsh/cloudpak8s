(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"013z":function(e,t,r){"use strict";r("KKXr"),r("pIFo");var n=r("pOBw"),a=r("q1tI"),o=r.n(a),i=r("NmYn"),p=r.n(i),s=r("OKom"),l=r("k4MR"),c=r("TSYQ"),b=r.n(c),m=r("QH2O"),u=r("qKvR"),h=function(e){var t,r=e.title,n=e.tabs,a=void 0===n?[]:n;return Object(u.b)("div",{className:b()(m.pageHeader,(t={},t[m.withTabs]=a.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},r)))))},g=r("pEPl"),d=r("BAC9"),O=function(e){var t=e.relativePagePath,r=e.repository,n=g.data.site.siteMetadata.repository,a=r||n,o=a.baseUrl,i=a.subDirectory,p=o+"/edit/"+a.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+d.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:d.link,href:p},"Edit this page on GitHub"))):null},f=r("FCXl"),P=(r("Oyvg"),r("Wbzz")),N=r("I8xM");var T=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],a=t.map((function(e){var t,a=p()(e,{lower:!0}),o=a===n,i=new RegExp(n+"(?!-)"),s=r.replace(i,a);return Object(u.b)("li",{key:e,className:b()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(P.Link,{className:N.link,to:""+s},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},a))))))},n}(o.a.Component),v=r("MjG9");t.a=function(e){var t=e.pageContext,r=e.children,a=e.location,o=e.Title,i=t.frontmatter,c=void 0===i?{}:i,b=t.relativePagePath,m=t.titleType,g=c.tabs,d=c.title,P=c.theme,N=c.description,j=c.keywords,R=n.data.site.pathPrefix,M=R?a.pathname.replace(R,""):a.pathname,y=g?M.split("/").filter(Boolean).slice(-1)[0]||p()(g[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:g,homepage:!1,theme:P,pageTitle:d,pageDescription:N,pageKeywords:j,titleType:m},Object(u.b)(h,{title:o?Object(u.b)(o,null):d,label:"label",tabs:g}),g&&Object(u.b)(T,{slug:M,tabs:g,currentTab:y}),Object(u.b)(v.a,{padded:!0},r,Object(u.b)(O,{relativePagePath:b})),Object(u.b)(f.a,{pageContext:t,location:a,slug:M,tabs:g,currentTab:y}),Object(u.b)(s.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},u6bY:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return i})),r.d(t,"default",(function(){return l}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var n=r("7ljp"),a=r("013z");r("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i={},p={_frontmatter:i},s=a.a;function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(s,o({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Alert Manager to SNMP"),Object(n.b)("p",null,"Prometheus Alertmanager natively supports a couple of different event destinations like Slack, email, PagerDuty, HipChat and ",Object(n.b)("a",o({parentName:"p"},{href:"https://prometheus.io/docs/alerting/configuration/"}),"others"),". For notification mechanisms not natively supported by the Alertmanager, the ",Object(n.b)("a",o({parentName:"p"},{href:"https://prometheus.io/docs/alerting/configuration/#webhook_config"}),"webhook receiver")," allows for integration."),Object(n.b)("p",null,"SNMP traps are still a popular method of sending events informing about issues that needs to be reported.\nThe instructions below allows to quickly setup a simple integration mechanism which will allow to generate SNMP traps for selected Prometheus alerts using open source ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/chrusty/prometheus_webhook_snmptrapper"}),"Prometheus WebHook to SNMP-trap forwarder"),"."),Object(n.b)("p",null,"1). Copy ",Object(n.b)("inlineCode",{parentName:"p"},"prometheus_webhook_snmptrapper")," to a Linux server accessible from your Prometheus AlertManager instance (lets name it ",Object(n.b)("inlineCode",{parentName:"p"},"linux1"),"). It is a single binary file which can be compiled from Golang ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/chrusty/prometheus_webhook_snmptrapper"}),"sources")," available on GitHub. You can also download the compiled Linux 64-bit version from ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm.box.com/s/sn45d6n2mviwwi3iusmzpxa8fzd75l2p"}),"here"),"."),Object(n.b)("p",null,"2). Install ",Object(n.b)("inlineCode",{parentName:"p"},"net-snmp")," and ",Object(n.b)("inlineCode",{parentName:"p"},"snmptrapd")," packages. On Ubuntu run:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"sudo apt-get install net-snmp snmptrapd\n")),Object(n.b)("p",null,"3). In the AlertManager configuration file, define the webhook receiver address in section ",Object(n.b)("inlineCode",{parentName:"p"},"receivers"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"    receivers:\n      - name: prometheus_webhook_snmptrapper\n        webhook_configs:\n        - url: 'http://<linux1_ip>:9999'\n")),Object(n.b)("p",null,"Port ",Object(n.b)("inlineCode",{parentName:"p"},"9999")," is port of ",Object(n.b)("inlineCode",{parentName:"p"},"prometheus_webhook_snmptrapper")," webhook server (make sure if it not already taken by other process) and can be changed using input parameter of ",Object(n.b)("inlineCode",{parentName:"p"},"prometheus_webhook_snmptrapper"),". "),Object(n.b)("p",null,"Edit Alertmanager secret in order to configure grouping and notification receiver."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"oc -n openshift-monitoring get secret alertmanager-main --template='{{ index .data \"alertmanager.yaml\" }}' |base64 -d > alertmanager.yaml\n")),Object(n.b)("p",null,"Then edit the ",Object(n.b)("inlineCode",{parentName:"p"},"alertmanager.yaml"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"global:\n  resolve_timeout: 5m\nroute:\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 12h\n  receiver: default\n  routes:\n  - match:\n      service: example-app\n    routes:\n    - match:\n        severity: critical\n      receiver: prometheus_webhook_snmptrapper\nreceivers:\n  - name: prometheus_webhook_snmptrapper\n    webhook_configs:\n    - url: 'http://<linux1_ip>:9999'\n")),Object(n.b)("p",null,"With this configuration, alerts of critical severity fired by the ",Object(n.b)("inlineCode",{parentName:"p"},"example-app")," service are sent using the ",Object(n.b)("inlineCode",{parentName:"p"},"prometheus_webhook_snmptrapper")," receiver, which means that these alerts are paged to a chosen person."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc -n openshift-monitoring create secret generic alertmanager-main --from-file=alertmanager.yaml --dry-run -o=yaml |  oc -n openshift-monitoring replace secret --filename=-\n")),Object(n.b)("p",null,"4). Copy the following MIB files: ",Object(n.b)("a",o({parentName:"p"},{href:"https://raw.githubusercontent.com/chrusty/prometheus_webhook_snmptrapper/master/PROMETHEUS-TRAPPER-MIB.txt"}),"PROMETHEUS-TRAPPER-MIB.txt")," and ",Object(n.b)("a",o({parentName:"p"},{href:"https://raw.githubusercontent.com/hardaker/net-snmp/master/mibs/SNMPv2-SMI.txt"}),"SNMPv2-SNI")," to your MIB directory ex. ",Object(n.b)("inlineCode",{parentName:"p"},"/usr/share/snmp/mibs"),". You can find you MIBDIR using the following command:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"snmptranslate -Dinit_mib .1.3 2>&1 |grep MIBDIR\n")),Object(n.b)("p",null,"5). Start ",Object(n.b)("inlineCode",{parentName:"p"},"snmptrapd")," using:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"snmptrapd -n -Ls d -m PROMETHEUS-TRAPPER-MIB\n")),Object(n.b)("p",null,"It will start snmptrapd as a daemon and SNMP traps will be logged to local syslog file (",Object(n.b)("inlineCode",{parentName:"p"},"/var/log/syslog")," by default on Ubuntu)."),Object(n.b)("p",null,"6). Start ",Object(n.b)("inlineCode",{parentName:"p"},"prometheus_webhook_snmptrapper")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"./prometheus_webhook_snmptrapper --webhookaddress 0.0.0.0:9999 > prom_snmp.log 2>&1  &\n")),Object(n.b)("p",null,"7). Verify that some Prometheus alerts has been generated after you started ",Object(n.b)("inlineCode",{parentName:"p"},"prometheus_webhook_snmptrapper")," and check the contents of syslog and ",Object(n.b)("inlineCode",{parentName:"p"},"prom_snmp.log"),"."),Object(n.b)("p",null,"The contents of ",Object(n.b)("inlineCode",{parentName:"p"},"prom_snmp.log")," should be similar to the one below:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),'time="2018-07-05T09:47:53-05:00" level=info msg="Preparing the alerts channel" logger=main\ntime="2018-07-05T09:47:53-05:00" level=info msg="Starting the SNMP trapper" address="127.0.0.1:162" logger=SNMP-trapper\ntime="2018-07-05T09:47:53-05:00" level=info msg="Starting the Webhook server" address="0.0.0.0:9999" logger=Webhook-server\ntime="2018-07-05T09:51:05-05:00" level=debug msg="Received a valid webhook alert" logger=Webhook-server payload="{\\"receiver\\":\\"default-receiver\\",\\"status\\":\\"firing\\",\\"alerts\\":[{\\"status\\":\\"firing\\",\\"labels\\":{\\"alertname\\":\\"ICPMonitoringHeartbeat\\",\\"severity\\":\\"none\\"},\\"annotations\\":{\\"description\\":\\"This is a Hearbeat event meant to ensure that the entire Alerting pipeline is functional.\\",\\"summary\\":\\"Alerting Heartbeat\\"},\\"startsAt\\":\\"2018-06-26T11:49:29.035689542Z\\",\\"endsAt\\":\\"0001-01-01T00:00:00Z\\",\\"generatorURL\\":\\"http://monitoring-prometheus-77d664c568-jzqnp:9090/graph?g0.expr=vector%281%29\\\\u0026g0.tab=1\\"}],\\"groupLabels\\":{\\"alertname\\":\\"ICPMonitoringHeartbeat\\"},\\"commonLabels\\":{\\"alertname\\":\\"ICPMonitoringHeartbeat\\",\\"severity\\":\\"none\\"},\\"commonAnnotations\\":{\\"description\\":\\"This is a Hearbeat event meant to ensure that the entire Alerting pipeline is functional.\\",\\"summary\\":\\"Alerting Heartbeat\\"},\\"externalURL\\":\\"http://monitoring-prometheus-alertmanager-7fdbf6c5cd-xdlhh:9093\\",\\"version\\":\\"4\\",\\"groupKey\\":\\"{}/{alertname=\\\\\\"ICPMonitoringHeartbeat\\\\\\"}:{alertname=\\\\\\"ICPMonitoringHeartbeat\\\\\\"}\\"}\\n"\ntime="2018-07-05T09:51:05-05:00" level=debug msg="Forwarding an alert to the SNMP trapper" index=0 labels="map[alertname:ICPMonitoringHeartbeat severity:none]" logger=Webhook-server status=firing\ntime="2018-07-05T09:51:05-05:00" level=debug msg="Received an alert" logger=SNMP-trapper status=firing\ntime="2018-07-05T09:51:05-05:00" level=debug msg="Created snmpgo.SNMP object" address="127.0.0.1:162" community=public logger=SNMP-trapper retries=1\ntime="2018-07-05T09:51:05-05:00" level=info msg="It\'s a trap!" logger=SNMP-trapper status=firing\n')),Object(n.b)("p",null,"Example Prometheus SNMP traps logged to syslog:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"Aug  6 07:55:20 csmo-icp2103-rs snmptrapd[7453]: 2018-08-06 07:55:20 UDP: [127.0.0.1]:55091->[127.0.0.1]:162 [UDP: [127.0.0.1]:55091->[127.0.0.1]:162]:#012SNMPv2-SMI::snmpModules.1.1.4.1.0 = OID: PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperFiringNotification#011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationTimestamp = STRING: 2018-08-06T12:14:09Z#011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationDescription = STRING: 99th percentile Latency for LIST requests to the kube-apiserver is higher than 1s.#011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationInstance = STRING: #011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationSeverity = STRING: warning#011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationLocation = STRING: #011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationService = STRING: #011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationJob = STRING: kubernetes-apiservers\nAug  6 07:57:30 csmo-icp2103-rs snmptrapd[7453]: 2018-08-06 07:57:30 UDP: [127.0.0.1]:39868->[127.0.0.1]:162 [UDP: [127.0.0.1]:39868->[127.0.0.1]:162]:#012SNMPv2-SMI::snmpModules.1.1.4.1.0 = OID: PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperFiringNotification#011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationTimestamp = STRING: 2018-08-06T12:00:29Z#011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationDescription = STRING: This is a Hearbeat event meant to ensure that the entire Alerting pipeline is functional.#011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationInstance = STRING: #011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationSeverity = STRING: none#011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationLocation = STRING: #011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationService = STRING: #011PROMETHEUS-TRAPPER-MIB-1::prometheusTrapperNotificationJob = STRING:\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-event-management-snmp-trap-index-mdx-232ea8ad772d694e97b2.js.map