###1.aliyun 

git clone http://git.oschina.net/quanpower/smartlink_iiot

###2.virtualenv

virtualenv iiot
source ~/ENV/iiot/bin/activate

###3.uninstall musquitto

sudo  apt-get remove --purge mosquitto

###4.install rabbitmq

echo 'deb http://www.rabbitmq.com/debian/ testing main' |
     sudo tee /etc/apt/sources.list.d/rabbitmq.list

wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc |
     sudo apt-key add -

sudo apt-get update

sudo apt-get install rabbitmq-server

###5.enable mqtt plugin

rabbitmq-plugins enable rabbitmq_mqtt

###6.enable management plugin

rabbitmq-plugins enable rabbitmq_management

###7.add user to rabbitmq

rabbitmqctl add_user  smartlinkcloud smartlinkcloud
rabbitmqctl set_user_tags smartlinkcloud administrator
rabbitmqctl set_permissions -p / smartlinkcloud ".*" ".*" ".*"

rabbitmqctl add_user  iiot smartlinkcloud
rabbitmqctl set_user_tags iiot monitoring
rabbitmqctl set_permissions -p / iiot ".*" ".*" ".*"

rabbitmqctl list_users

###8.add auth to rabbitmq

vim /etc/rabbitmq/rabbitmq.config

[{rabbit,        [{tcp_listeners,    [5672]}]},
 {rabbitmq_mqtt, [{default_user,     <<"iiot">>},
                  {default_pass,     <<"smartlinkcloud">>},
                  {allow_anonymous,  false},
                  {vhost,            <<"/">>},
                  {exchange,         <<"amq.topic">>},
                  {subscription_ttl, 1800000},
                  {prefetch,         10},
                  {ssl_listeners,    []},
                  %% Default MQTT with TLS port is 8883
                  %% {ssl_listeners,    [8883]}
                  {tcp_listeners,    [1883]},
                  {tcp_listen_options, [{backlog,   128},
                                        {nodelay,   true}]}]}
].

###9.bitsring

pip install bitstring


###10.install flower

pip install flower
flower -A proj --port=5555

###11. transmit with gateway

mosquitto_sub -h 101.200.158.2 -t "001.downstream" -u "iiot" -P "smartlinkcloud"
mosquitto_pub -h 101.200.158.2 -t "001.downstream" -m "hello world" -u "iiot" -P "smartlinkcloud"