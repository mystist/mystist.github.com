require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end

# desc "Generate and publish blog to gh-pages"
# task :publish => [:generate] do
#   Dir.mktmpdir do |tmp|
#     system "mv _site/* #{tmp}"
#     system "git checkout -B gh-pages"
#     system "rm -rf *"
#     system "mv #{tmp}/* ."
#     message = "Site updated at #{Time.now.utc}"
#     system "git add ."
#     system "git commit -am #{message.shellescape}"
#     system "git push origin gh-pages --force"
#     system "git checkout master"
#     system "echo yolo"
#   end
# end

desc "Generate and publish blog to master"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    repo = %x(git config remote.origin.url).gsub(/^git:/, 'https:')
    deploy_branch = 'gh-pages'
    if repo.match(/github\.com\.git$/)
      deploy_branch = 'master'
    end
    system "git remote set-url --push origin #{repo}"
    system "git remote set-branches --add origin #{deploy_branch}"
    system 'git fetch -q'
    system "git config user.name '#{ENV['GIT_NAME']}'"
    system "git config user.email '#{ENV['GIT_EMAIL']}'"
    system 'git config credential.helper "store --file=.git/credentials"'
    File.open('.git/credentials', 'w') do |f|
      f.write("https://#{ENV['GH_TOKEN']}:@github.com")
    end
    system "git branch #{deploy_branch} origin/#{deploy_branch}"
    system "mv _site/* #{tmp}"
    system "git checkout -B master"
    system "rm -rf *"
    system "mv #{tmp}/* ."
    message = "Site updated at #{Time.now.utc}"
    system "git add ."
    system "git commit -am #{message.shellescape}"
    system "git push origin master --force"
    system "git checkout develop"
    File.delete '.git/credentials'
  end
end

task :default => :publish
