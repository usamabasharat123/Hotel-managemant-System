create table guest(
  g_id number(2, 0),
  g_fname varchar(14),
  g_lname varchar(13),
  city varchar(20),
  phone number(20),
  email varchar(30),
  gender varchar(10),
  g_address text,
  cnic varchar(20),
  booking_id number(10),
  constraint pk_g_id primary key (g_id)
);

create table booking(
  booking_id int primary key,
  arr_date date,
  dep_date date,
  payment_type varchar(9),
  total_persons int,
  
  note varchar(50),
  room_id int
);

create table rooms(
  room_id int,
  room_type varchar(10),
  price int,
  capacity int,
  total_persons int,
  no_of_rooms int,
  facilities varchar2(150)
);

create table login_table(
  username varchar(10),
  pass varchar(20),
  employee_id int

);

create table employee(
  employee_id int,
  ename varchar(30),
  phone int,
  salary int,
  email varchar(50),
  e_address varchar2(150)
);

create table rooms_detail(
  room_id int,
  g_id int
) -- Insert row into guest table using named columns.
insert into
  guest
values
  (
    1001,
    'ALI',
    'HASSAN',
    'GUJRANWALA',
    03006612288,
    'ali12@gmail.com',
    'M',
    'SIALKOT ROAD,GUJRANWALA',
    '3540143046392',
    54001
  );

insert into
  guest
values
  (
    1002,
    'ALI',
    'HAMZA',
    'LAHORE',
    03032656288,
    'hamza34@gmail.com',
    'M',
    'WAHDAT ROAD,LAHORE',
    '3540144546692',
    54002
  );

insert into
  guest
values
  (
    1003,
    'MUHAMMAD',
    'UZAIR',
    'SAHIWAL',
    03021633288,
    'uzair87@gmail.com',
    'M',
    'CHINA SCHEME, SAHIWAL',
    '3540143362392',
    54003
  );

insert into
  guest
values
  (
    1004,
    'ALI',
    'HASSAN',
    'GUJRANWALA',
    03006612288,
    'ali12@gmail.com',
    'M',
    'SIALKOT ROAD,GUJRANWALA',
    '3540143046392',
    54004
  );

insert into
  guest
values
  (
    1005,
    'KASHAF',
    'SHAHZADI',
    'LAHORE',
    03022614385,
    'parri12@gmail.com',
    'F',
    'FAISAL TOWN,LAHORE',
    '3540325649892',
    54005
  );

insert into
  guest
values
  (
    1006,
    'MUHAMMAD',
    'AWAIS',
    'FAISLABAD',
    03236567788,
    'awais765@gmail.com',
    'M',
    'NEW CITY TOWN,FAISLABAD',
    '3540143048692',
    54006
  );

insert into
  guest
values
  (
    1007,
    'MUNEEBA',
    'TANVIR',
    'SHARAQPUR SHARIF',
    03006634568,
    'tanvir12@gmail.com',
    'F',
    'MOHALLA TEACHER COLONY,SHARAQPUR SHARIF',
    '3540187045692',
    54007
  );

insert into
  guest
values
  (
    1008,
    'USAMA',
    'BASHARAT',
    'LAHORE',
    03239877388,
    'umaich7@gmail.com',
    'M',
    'KALMA CHOWK,LAHORE',
    '3548763046765',
    54008
  );

insert into
  guest
values
  (
    1009,
    'ZULFIQAR',
    'HUSSAIN',
    'LAHORE',
    03037912288,
    'zul12@gmail.com',
    'M',
    'GARDEN TOWN,LAHORE',
    '3540143046672',
    54009
  );

insert into
  guest
values
  (
    1010,
    'ALIZA',
    'BATOOL',
    'SAHIWAL',
    03233457388,
    'bat9876@gmail.com',
    'F',
    'ALI TOWN,SAHIWAL',
    '3534147656392',
    540010
  );

-- Insert a row into booking table by column position.
insert into
  booking
values
  (
    54001,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 10),
    'CASH',
    1,
    '',
  );

insert into
  booking
values
  (
    54002,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 3),
    'CARD',
    2,
    'ROOM MUST BE CLEAN',
  );

insert into
  booking
values
  (
    54003,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 5),
    'CARD',
    1,
    'STAFF MUST BE CORPORATIVE.',
  );

insert into
  booking
values
  (
    54004,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 4),
    'CASH',
    1,
    '',
  );

insert into
  booking
values
  (
    54005,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 6),
    'CASH',
    3,
    '',
  );

insert into
  booking
values
  (
    54006,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 2),
    'CASH',
    1,
    '',
  );

insert into
  booking
values
  (
    54007,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 1),
    'CARD',
    1,
    'NOTHING',
  );

insert into
  booking
values
  (
    54008,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 4),
    'CASH',
    1,
    '',
  );

insert into
  booking
values
  (
    54009,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 4),
    'CASH',
    1,
    '',
  );

insert into
  booking
values
  (
    540010,
    TO_DATE(SYSDATE),
    TO_DATE(SYSDATE + 4),
    'CASH',
    1,
    '',
  );

insert into
  rooms
values
  (1004,'SINGLE', 3500, 1, 10, 1,'');

insert into
  rooms
values
  (1005,'DOUBLE', 5000, 3, 10, 2,'');
insert into
  rooms
values
  (1006,'DELUX', 8500, 4, 10, 3,'');


insert into
  rooms
values
  (1007,'FAMILY', 10000, 5, 10, 4,'');

insert into
  login_table
values
  ('BITF20M509', 'PUCIT', 509);

insert into
  login_table
values
  ('BITF20M510', 'PUCIT', 510);

insert into
  login_table
values
  ('BITF20M517', 'PUCIT', 517);

insert into
  login_table
values
  ('BITF20M528', 'PUCIT', 528);

insert into
  login_table
values
  ('BITF20M541', 'PUCIT', 541);

insert into
  employee
values
  (
    509,
    'HUMA SAEED',
    '03098767543',
    200000,
    'humasaeed509@gmail.com',
    'SIALKOT'
  );

insert into
  employee
values
  (
    510,
    'ABDUL QADIR',
    '03086334924',
    150000,
    'abdulqadir510@gmail.com',
    'SHARAQPUR SHARIF'
  );

insert into
  employee
values
  (
    517,
    'RAMISHA RAUF',
    '03238767541',
    250000,
    'ramisharauf517@gmail.com',
    'FAISALABAD'
  );

insert into
  employee
values
  (
    528,
    'USAMA BASHARAT',
    '03095544404',
    150000,
    'usamabasharat@gmail.com',
    'GUJRANWALA'
  );

insert into
  employee
values
  (
    541,
    'SUBKTGEEN BABAR',
    '03415645321',
    150000,
    'subktgeenbabar541@gmail.com',
    'SHARAQPUR SHARIF'
  );

insert into rooms_detail
values
  (1004,54001);

insert into
  rooms_detail
values
  (1005,54002);

insert into
  rooms_detail
values
  (1006,54003);


insert into
  rooms_detail
values
  (1007,54004);

insert into
  rooms_detail
values
  (1008,54005);

insert into
  rooms_detail
values
  (54006, 'SINGLE');

insert into
  rooms_detail
values
  (54007, 'DELUX');

insert into
  rooms_detail
values
  (54008, 'DOUBLE');

insert into
  rooms_detail
values
  (54009, 'FAMILY');

insert into
  rooms_detail
values
  (54010, 'SINGLE');