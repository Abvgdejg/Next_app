FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update -qq && apt-get install -y gnupg build-essential libmariadb-dev vim less locales \
    dialog apt-utils curl g++ gcc autoconf automake bison libc6-dev libffi-dev libgdbm-dev libncurses5-dev \
    libsqlite3-dev libtool libyaml-dev make pkg-config sqlite3 zlib1g-dev libgmp-dev libreadline-dev libssl-dev tzdata wget net-tools \
    && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && locale-gen ru_RU \
    && locale-gen ru_RU.UTF-8 \
    && localedef -i ru_RU -f UTF-8 ru_RU.UTF-8 

RUN gpg --keyserver hkps://keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB \
    && curl -sSL https://get.rvm.io | bash -s stable \
    && /usr/local/rvm/bin/rvm install 3.1.0 \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/bundle   /usr/local/bin/bundle \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/bundler   /usr/local/bin/bundler \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/erb   /usr/local/bin/erb \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/executable-hooks-uninstaller   /usr/local/bin/executable-hooks-uninstaller \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/gem   /usr/local/bin/gem \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/irb   /usr/local/bin/irb \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/racc   /usr/local/bin/racc \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/rake   /usr/local/bin/rake \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/rbs   /usr/local/bin/rbs \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/rdbg   /usr/local/bin/rdbg \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/rdoc   /usr/local/bin/rdoc \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/ri   /usr/local/bin/ri \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/ruby   /usr/local/bin/ruby \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/ruby_executable_hooks   /usr/local/bin/ruby_executable_hooks \
    && ln -s /usr/local/rvm/gems/ruby-3.1.0/wrappers/typeprof   /usr/local/bin/typeprof
ENV LC_ALL ru_RU.UTF-8


RUN mkdir /app
WORKDIR /app

COPY ./app/Gemfile ./app/Gemfile.lock ./
RUN bundle install --jobs 20 --retry 6
ENV PATH="${PATH}:/app/bin"
COPY ./app /app

